import React from 'react'
import {X } from "lucide-react";

function Model({onClose}) {
  return (
    <div className='fixed inset-0 bg-opacity-5 bg-black flex items-center justify-center '>
       <div className='mt-10 flex flex-col gap-5 text-white'>
           <button className='place-self-end' onClick={onClose}> <X size={30}/> </button>
           <div className='bg-black rounded-xl px-20 py-10 flex flex-col gap-5'>
                <h1 className='text-white'>{ }</h1>
                <h2> Mohmaed </h2>
           </div>
       </div>
    </div>
  )
}

export default Model