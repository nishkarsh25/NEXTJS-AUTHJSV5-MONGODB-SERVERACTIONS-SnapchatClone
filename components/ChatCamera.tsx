"use client"
import React, { useEffect, useRef, useState } from 'react'
import { CiCamera } from "react-icons/ci";
import { readFileAsDataURL } from '@/lib/utils';
import ImagePreviewDialog from './ImagePreviewDialog';
import UserDialog from './UserDialog';

const ChatCamera = () => {
    const imageRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [step, setStep] = useState(0);
    const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsDataURL(file);
            setSelectedFile(dataUrl);
        }
    }
    const closeDialog = () => {
        setSelectedFile("");
        setStep(0);
    };

    
}

