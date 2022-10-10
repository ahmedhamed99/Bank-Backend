import { Application, Request, Response } from "express";
import { CustomerStore } from "../models/customer";
import { TransactionStore } from "../models/transaction";
import { Transaction } from "../types/transaction.type";

const store = new TransactionStore();
const customerStore = new CustomerStore();

const create = async (req: Request, res: Response) => {
    const transation: Transaction = {
        sender_id: req.body.sender_id as number,
        receiver_id: req.body.receiver_id as number,
        amount: req.body.amount as number,
        created_at: req.body.created_at
    };

    const sender = await customerStore.show(req.body.sender_id);
    const receiver = await customerStore.show(req.body.receiver_id);


    if (transation.amount <= 0) {
        res.status(400);
        res.json("Enter Positive Amount");
        return;
    }

    if (parseInt(sender.balance as unknown as string) <
        parseInt(transation.amount as unknown as string)) {
        
        res.status(400);
        res.json("Sender Does not have enough balance");
        return
    }

    const newSenderBalance = parseInt(sender.balance as unknown as string) - parseInt(transation.amount as unknown as string);
    const newReceiverBalance = parseInt(receiver.balance as unknown as string) + parseInt(transation.amount as unknown as string);


    try {
        const newTransaction = await store.create(transation);
        await customerStore.update(newSenderBalance,sender.id! as unknown as number)
        await customerStore.update(newReceiverBalance,receiver.id! as unknown as number)

        res.json(newTransaction);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const latest = async (req: Request, res: Response) => {
    try {
        const latestTransaction = await store.latest();
        if (latestTransaction) {
            res.json(latestTransaction);
        }
        else {
            res.json("No Transfers")
        }

    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const transactionRoutes = (app: Application) => {
    app.get('/transactions/latest', latest);
    app.post('/transactions', create);
}

export default transactionRoutes;