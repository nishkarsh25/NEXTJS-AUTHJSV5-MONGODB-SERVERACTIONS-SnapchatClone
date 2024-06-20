import mongoose,{Document, Model} from "mongoose";

export interface UserInterface{
    username:string,
    fullname:string,
    email:string,
    profilePhoto:string
}

// handling ts for timestamp as well
export interface UserDocument extends UserInterface, Document{
    createdAt:Date,
    updatedAt:Date
}

const userModel = new mongoose.Schema<UserDocument>();

