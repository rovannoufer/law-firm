import React from 'react'
import image from "../img/error.jpg"
import Loading from '../components/loading';

function Error404() {



  return (
    <>
    
          <div className='relative flex justify-center items-center lg:p-32 top-44 lg:top-32'>
               <img src={image}  className='h-96'/>
          </div>
     
    </>
  )
}

export default Error404