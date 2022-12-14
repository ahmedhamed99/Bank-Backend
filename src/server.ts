import express from "express";
import customerRoutes from "./handlers/customers";
import transactionRoutes from "./handlers/transactions";
import bodyParser from "body-parser";
import cors from "cors";
import foundCustomers from "./services/foundCustomers";

const app: express.Application = express();

foundCustomers();

app.use(bodyParser.json())
app.use(cors())

customerRoutes(app);
transactionRoutes(app);

app.listen(8000,()=>{
});

export default app;
