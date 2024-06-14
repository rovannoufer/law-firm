import React from 'react'
import image from "../img/error.jpg"

function Error404() {
  return (
    <div className='relative flex justify-center items-center lg:p-48 top-44'>
      <img src={image}  className='h-96'/>
    </div>
  )
}

export default Error404