import { CustomerStore } from "../models/customer";
import { Application, Request, Response } from "express";

const store = new CustomerStore();

const index = async (_req: Request, res: Response): Promise<void> => {
    try {

        const users = await store.index();

        res.json(users);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const show = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.id;

    try {
        const user = await store.show(userId);

        res.json(user);
    } catch (err) {
        res.status(400);

        res.json(err)
    }
}

const customerRoutes = (app: Application) =>{
    app.get('/customers',index);
    app.get('/customers/:id',show);
}

export default customerRoutes;