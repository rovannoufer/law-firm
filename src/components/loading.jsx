import React from 'react'
import lawAnimation from "../img/icons_law.gif"

function Loading() {
  return (
    <div className='relative flex justify-center items-center lg:p-48 lg:top-64 top-96'>
        <img src={lawAnimation} alt='Loading' className='w-24'  />
    </div>
  )
}

export default Loading