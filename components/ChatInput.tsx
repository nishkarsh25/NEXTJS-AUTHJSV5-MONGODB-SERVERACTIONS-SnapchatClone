"use client";
import React, { useState } from 'react'
import { MdPhotoCamera } from "react-icons/md";
import { EmojiPopover } from './EmojiPopover';
import { useParams } from 'next/navigation';
import { sendSnapMessage } from '@/lib/serveractions';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const ChatInput = () => {
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);
    const params = useParams<{ id: string }>();
    const receiverId = params.id;

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await sendSnapMessage(
                inputText,
                receiverId,
                "text" 
            ); 
            setInputText(""); 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    
}

