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

  
  

  
  

  
  
}

