import Client from "../database/database";
import { Transaction } from "../types/transaction.type";

export class TransactionStore {
    async create(transaction: Transaction):Promise<Transaction>{
        const conn = await Client.connect();
        const sql = "INSERT INTO transactions (sender_id,receiver_id,amount,created_at) VALUES ($1,$2,$3,$4) RETURNING *";
        var res = await conn.query(sql,[transaction.sender_id,transaction.receiver_id,transaction.amount,transaction.created_at]);
        
        conn.release();
        return res.rows[0];
    }
                                               
    async latest():Promise<Transaction> {
        const conn = await Client.connect();
        const sql = "SELECT * FROM transactions ORDER BY created_at DESC LIMIT 1";
        var res = await conn.query(sql);

        conn.release();
        return res.rows[0];
    }
}