import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='flex justify-between p-4 border-b border-black '>
        <div className=''>
         <NavLink to={'/'} >   
          <div className='flex flex-col top-0 items-center'> 
            
            <img src='src\img\law.jpg' className='w-24'/>
            <p className='text-base font-bold'> LAW FIRM </p>
          </div>
          </NavLink>
        </div>

         <div className='flex p-10 gap-4'> 

           <NavLink to={'/ipc'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"} > IPC </NavLink>
           <NavLink to={'/crpc'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"}> CRPC  </NavLink>
           <NavLink to={'/ida'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"}> IDA </NavLink>
           <NavLink to={'/iea'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"}> IEA  </NavLink>
           <NavLink to={'/cpc'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"}> CPC  </NavLink>
           <NavLink to={'/mva'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"}> MVA  </NavLink>
           <NavLink to={'/nia'} className={"border border-gray-300 border-2 p-2 rounded-xl text-center w-20 hover:border-gray-100"}> NIA  </NavLink>
        

            
         </div>

         
      </div>
    </>
  )
}

export default Header