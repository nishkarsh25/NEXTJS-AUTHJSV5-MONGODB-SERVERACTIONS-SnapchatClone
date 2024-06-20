import React from 'react'
import { MdOutlineCameraAlt } from "react-icons/md";
import { Avatar, AvatarImage } from './ui/avatar';
import { formatDate } from '@/lib/utils';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { IoSend, IoSendOutline } from "react-icons/io5";
import Link from 'next/link';



const Friend = ({ user }: { user: any }) => { 
    const lastMessage = user.lastMessage;
    const lastMessageType = lastMessage?.messageType;
    const formattedDate = lastMessage ? formatDate(lastMessage?.createdAt) : formatDate(new Date());
    const amISender = lastMessage && lastMessage?.senderId?._id !== user.participants[0]._id;
    const isMessageOpened =  lastMessage?.opened;
    let messageStatus: string;
    let icon: JSX.Element;
    
    if (amISender) {
        messageStatus = isMessageOpened ? 'Opened' : 'Sent';
        icon = lastMessageType === 'text'
            ?
            (
                isMessageOpened ? <IoSend size={'16px'} className='text-[#00b4d8]' /> : <IoSendOutline size={'16px'} className='text-[#00b4d8]' />
            ) :
            (
                isMessageOpened ? <RiCheckboxBlankFill size={'16px'} className='text-red-500'/> : <MdCheckBoxOutlineBlank size={'16px'} className='text-red-500'/>
            )
    } else {
        if (!lastMessage) {
            icon = <RiCheckboxBlankFill />
            messageStatus = "New Snap"
        } else {
            messageStatus = isMessageOpened ? "Received" : "Show Message";
            icon = lastMessageType === "text"
                ?
                (
                    !isMessageOpened ? <RiCheckboxBlankFill /> : <MdCheckBoxOutlineBlank />
                )
                :
                (
                    !isMessageOpened ? <RiCheckboxBlankFill /> : <MdCheckBoxOutlineBlank />
                )
        };
    };

    
}

