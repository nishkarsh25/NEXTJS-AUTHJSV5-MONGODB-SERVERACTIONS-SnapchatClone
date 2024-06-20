import mongoose, { Types, Document, Model, PopulatedDoc } from "mongoose"
import { UserDocument } from "./user.model"

export interface MessageInterface{
    senderId:Types.ObjectId | PopulatedDoc<UserDocument>,
    receiverId:Types.ObjectId | PopulatedDoc<UserDocument>,
    content:string,
    messageType: 'text' | 'image',
    opened:boolean
}
export interface MessageDocument extends MessageInterface, Document{
    createdAt:Date,
    updatedAt:Date
}

