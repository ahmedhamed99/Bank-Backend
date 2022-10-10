import { CustomerStore } from "../models/customer";
import generateDummyData from "./generatedummydata";

const store = new CustomerStore();

const foundCustomers = async ():Promise<void> => {
    const customers = await store.index();
    if (customers.length === 0){
        generateDummyData();
    }
}

export default foundCustomers;