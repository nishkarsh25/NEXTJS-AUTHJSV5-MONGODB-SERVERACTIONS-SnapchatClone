"use server"
import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import { Message, MessageDocument } from "@/models/message.model"
import { unstable_noStore as noStore } from "next/cache";
import {v2 as cloudinary} from "cloudinary";
import { revalidatePath } from "next/cache";
import connectDB from "./db";
import { redirect } from "next/navigation";






