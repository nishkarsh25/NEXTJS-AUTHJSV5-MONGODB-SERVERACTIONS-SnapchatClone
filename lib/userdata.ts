import { Message, MessageDocument } from "@/models/message.model";
import { User, UserDocument } from "@/models/user.model";
import connectDB from "./db";
import { Chat } from "@/models/chat.model";

export const getUserProfile = async (userId:string) => {
    try {
        await connectDB();
        const user : UserDocument | null = await User.findOne({_id: userId});
        if(!user){
            return "User not found";
        }
        return user; 
    } catch (error) {
        console.log(error);
        throw error;
    }   
};


