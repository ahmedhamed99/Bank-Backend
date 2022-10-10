import fs from "fs";
import Client from "../database/database";

async function generateDummyData(){
    const dataSql = fs.readFileSync(__dirname+"\\dummydata.sql").toString();
    const conn = await Client.connect();
    const dataArr = dataSql.toString().split("\r\n");
    dataArr.forEach(async(sql)=>{
        await conn.query(sql);
    });
}

export default generateDummyData;