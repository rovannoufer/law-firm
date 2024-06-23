import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from "../img/law.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [toggle, setToggle] = useState(true);

  
  return (


    <>
      <div className='flex justify-between p-4  border-black shadow-xl '>
        
         <NavLink to={'/'} >   
          <div className='flex flex-col top-0 items-center'> 
            
            <img src= {image} className='w-24'/>
            <p className='text-base font-bold'> LAW FIRM </p>
          </div>
          </NavLink>
        

         <div className={`absolute ${ toggle ? " -top-full" :  " top-[152px]"} z-[1] left-0 w-full text-white flex flex-col items-center justify-center p-10 gap-4 bg-black  lg:static lg:flex-row lg:bg-transparent lg:justify-end`}> 

           <NavLink to={'/ipc'} className={`border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white`} > IPC </NavLink>
           <NavLink to={'/crpc'} className={" border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white"}> CRPC  </NavLink>
           <NavLink to={'/ida'} className={" border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white"}> IDA </NavLink>
           <NavLink to={'/iea'} className={" border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white"}> IEA  </NavLink>
           <NavLink to={'/cpc'} className={" border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white"}> CPC  </NavLink>
           <NavLink to={'/mva'} className={" border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white"}> MVA  </NavLink>
           <NavLink to={'/nia'} className={" border-gray-300 border-2 p-2 rounded-xl text-center w-20 lg:text-black sm:text-white"}> NIA  </NavLink>
        

            
         </div>

         <div className='relative p-5 top-8 w-10 lg:hidden'>
         <button onClick={()=>{
         setToggle(!toggle);
          }}>
            <FontAwesomeIcon icon={faList} />
         </button>
         </div>

         
      </div>
    </>
  )
}

export default Header