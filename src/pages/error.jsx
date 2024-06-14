import React from 'react'
import image from "../img/error.jpg"

function Error404() {
  return (
    <div className='flex justify-center items-center p-52'>
      <img src={image}  className='h-96'/>
    </div>
  )
}

export default Error404