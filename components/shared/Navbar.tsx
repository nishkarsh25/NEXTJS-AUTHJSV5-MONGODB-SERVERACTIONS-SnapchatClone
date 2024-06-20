import Image from 'next/image'
import React from 'react'
import SnapchatLogo from "@/public/Snapchat-logo.png";
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { TbGridDots } from "react-icons/tb";
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { auth } from '@/auth';

const Navbar = async () => {
    const authUser = await auth();
    
}

