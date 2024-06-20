import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { UserDocument } from '@/models/user.model'
import { Avatar, AvatarImage } from './ui/avatar'
import { VscSend } from "react-icons/vsc";
import { Loader2 } from 'lucide-react'
import { sendSnapMessage } from '@/lib/serveractions'
import { useRouter } from 'next/navigation'
 

const UserDialog = (
  {
    selectedFile,
    close,
    onPreview
  }:
    {
      selectedFile: string,
      close: () => void,
      onPreview: () => void
    }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDocument>();
  const router = useRouter();

  const selectedUserHandler = (user: UserDocument) => {
    setSelectedUser(user);
  }
  const sendMessageHandler = async () => {
    setSendMessageLoading(true);
    try {
      await sendSnapMessage(selectedFile, selectedUser?._id, 'image');
      router.push(`/chat/${selectedUser?._id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setSendMessageLoading(false);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/chat/getusers');
        const data = await res.json(); 
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [])
  
}

