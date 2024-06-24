import React from 'react'
import {X } from "lucide-react";

function SearchModel({onClose, searchUser, searchId}) {

    
  return (
    <>
     <div className='fixed inset-0 bg-opacity-5 bg-black flex items-center justify-center' onClick={onClose}>
       <div className='flex flex-col gap-5 text-white lg:w-[50%] '>
           <button className='place-self-end bg-black rounded-3xl' onClick={onClose}> <X size={30}/> </button>
           <div className='bg-black rounded-xl px-20 py-10 flex flex-col gap-5 text-white'>
                
                <h1 className='text-3xl'>Section:  { searchUser.section} </h1>
                <h1> Title: {searchUser.title} </h1>
                <p className="overflow-y-auto h-96 "> Description: "{searchUser.description}" </p>
                
           </div>
       </div>
    </div>
   </>
  )
}

export default SearchModel