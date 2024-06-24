import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='flex flex-col gap-10 items-center mt-10 mb-24 lg:mb-10' >
      <NavLink to={'/ipc'} >
        <div className=' p-5 rounded-xl w-96 shadow-xl text-center relative'>
            <p > IPC  <FontAwesomeIcon icon={faArrowRight} /></p>
            <p> Indian Penal Code
           
            </p>
        </div>
      </NavLink>
      <NavLink to={'/crpc'}>
        <div className='p-5  rounded-xl shadow-xl w-96 text-center'>
            <p> CRPC <FontAwesomeIcon icon={faArrowRight} /></p>
            <p>Code of Criminal Procedure
            
            </p>
        </div>
      </NavLink>
      <NavLink to={'/ida'} >
            <div className='p-5  rounded-xl shadow-xl w-96 text-center'>
                <p > IDA <FontAwesomeIcon icon={faArrowRight}/></p>
                <p> Indian Divorce Act
                
                </p>
            </div>
      </NavLink>
      <NavLink to={'/iea'}>
      <div className=' p-5  rounded-xl shadow-xl w-96 text-center'>
        <p > IEA <FontAwesomeIcon icon={faArrowRight} /></p>
        <p>Indian Evidence Act
        
        </p>
      </div>
      </NavLink>
    <NavLink to={'/cpc'}>
    <div className='p-5  rounded-xl shadow-xl w-96 text-center'>
        <p> CPC <FontAwesomeIcon icon={faArrowRight}/></p>
        <p>Code of Civil Procedure
        
        </p>
      </div>
    </NavLink>
     <NavLink to={'/mva'}>
     <div className='p-5  rounded-xl shadow-xl w-96 text-center'>
        <p> MVA  <FontAwesomeIcon icon={faArrowRight}  /></p>
        <p>Motor Vehicles Act
       
        </p>
      </div>
     </NavLink>
     <NavLink to={'/nia'}>
     <div className=' p-5  rounded-xl shadow-xl w-96 text-center'>
        <p> NIA <FontAwesomeIcon icon={faArrowRight}/></p>
        <p>National Investigation Agency
              
         </p>
      </div>

     </NavLink>
    </div>
  )
}

export default About