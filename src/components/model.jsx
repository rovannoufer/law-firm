import React, { useState } from 'react'
import {X } from "lucide-react";

function Model({onClose, users, selectedUser}) {

  return (
   <>
     <div className='fixed inset-0 bg-opacity-5 bg-black flex items-center justify-center ' onClick={onClose}>
       <div className=' flex flex-col gap-5 text-white lg:w-[50%]'>
           <button className='place-self-end bg-black rounded-3xl' onClick={onClose}> <X size={30}/> </button>
           <div className='bg-black rounded-xl px-20 py-10 flex flex-col gap-5 text-white '>
                
                <h1 className='text-3xl'>Section:  {users[selectedUser].Section || users[selectedUser].section} </h1>
                <h1> Title: {users[selectedUser].title} </h1>
                <p className="overflow-y-auto h-96 "> Description: "{users[selectedUser].description}" </p>
                
           </div>
       </div>
    </div>
   </>
  )
}

export default Model;