import Client from "../database/database";
import { Customer } from "../types/customers.type";

export class CustomerStore {
    async index():Promise<Customer[]>{
        const conn = await Client.connect();
        const sql = "SELECT * FROM customers";
        var res = await conn.query(sql);

        conn.release();

        return res.rows;
    }
    
    async show(id: string):Promise<Customer>{
        const conn = await Client.connect();
        const sql = "SELECT * FROM customers WHERE id = ($1)";
        var res = await conn.query(sql,[id]);

        conn.release();

        return res.rows[0];
    }
    
    async update(balance: number,id:number):Promise<Customer>{
        const conn = await Client.connect();
        const sql = "UPDATE customers SET balance=($1) WHERE id=($2) RETURNING *";
        var res = await conn.query(sql,[balance,id]);
        
        conn.release();

        return res.rows[0];
    }
    
}