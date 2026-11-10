"use client"

import React from 'react'

import Link from "next/link"

import { Button } from "../ui/button"

import {useSession, signOut}  from "@/lib/auth-client"









const Navbar = () => {


    const {data : session}  = useSession()







  return (


    <div className =  "flex justify-between w-full max-w-7xl px-4">

    <div className = "">

    <Link href = "/"><h2>Home</h2></Link>


    </div>


    <div>

    <Link href= "/create">Create File</Link>




    </div>





    <div className = "">

    <div className = "flex gap-2">


    {session? <Button onClick = {()=>signOut()}>Logout</Button>  
    
    
    :

    <div className = " flex gap-4">

    <Link href= "/sign-in">Sign-in</Link>
    <Link href= "/sign-up">Sign-up</Link>  

    </div>
    
    
    
    
    }

        


    </div>  



    </div>
    
    
    
    
    
    </div>
  )
}

export default Navbar