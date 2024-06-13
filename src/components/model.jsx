import React from 'react'
import {X } from "lucide-react";

function Model({onClose, users, selectedUser}) {
  return (
    <div className='fixed inset-0 bg-opacity-5 bg-black flex items-center justify-center '>
       <div className='mt-10 flex flex-col gap-5 text-white w-[50%]'>
           <button className='place-self-end' onClick={onClose}> <X size={30}/> </button>
           <div className='bg-black rounded-xl px-20 py-10 flex flex-col gap-5 text-white '>
                
                <h1 className='text-3xl'>Section:  {users[selectedUser].Section} </h1>
                <h1> Title: {users[selectedUser].section_title} </h1>
                <p> Description: "{users[selectedUser].section_desc}" </p>
           </div>
       </div>
    </div>
  )
}

export default Model