import mongoose, { Types,Document, Model } from "mongoose";

interface ChatInterface {
    participants:Types.ObjectId[],
    messages:Types.ObjectId[],
}
interface ChatDocument extends ChatInterface, Document{
    createdAt:Date,
    updatedAt:Date
}
const chatModel = new mongoose.Schema<ChatDocument>();
