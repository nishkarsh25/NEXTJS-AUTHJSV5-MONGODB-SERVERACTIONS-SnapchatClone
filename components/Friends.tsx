import React from 'react'
import Friend from './Friend'
import { auth } from '@/auth'
import { getSidebarUsers } from '@/lib/userdata';
 
// const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
 

const Friends = async () => { 
  const authUser = await auth();
  // sleep(1000);
  const otherUsers:any =  authUser?.user ? await getSidebarUsers(authUser?.user?._id) : [];
  

  
}
