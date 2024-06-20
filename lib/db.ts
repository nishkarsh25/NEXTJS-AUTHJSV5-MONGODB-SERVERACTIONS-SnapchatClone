import mongoose , {Connection} from "mongoose";

let isConnected:Connection | boolean = false;

const connectDB = async () => {
    if(isConnected){
        console.log("Mongo Already Connected");
        return isConnected;
    }
    try {
        
    } catch (error) {
        
    }
}
