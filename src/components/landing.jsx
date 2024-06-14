import React from 'react'
import image from '../img/1.jpg'
import Loading from './loading';

function Landing() {


  return (
  <>
     
      <div className='mb-10 '>
      <div className=' flex flex-col bg-black text-white p-28 items-center lg:flex-row'>
          
          <div className='flex lg:w-1/2 text-lg'>
          <p className='overflow-y-auto h-96 w-96 lg:w-auto'> Indian law is a vast and complex system rooted in its Constitution, which guarantees fundamental rights to all citizens. 
              It encompasses various legal domains, including criminal, civil, corporate, and family law, ensuring justice and equality.
               The Indian judiciary, with the Supreme Court at its apex, plays a crucial role in interpreting and enforcing laws.
                Landmark legislations like the Indian Penal Code, Contract Act, and Companies Act form the backbone of legal governance.
               Our firm is dedicated to navigating this intricate legal landscape to provide expert guidance and representation. </p>
          
         
          </div>
          <div className='lg:w-1/2 lg:p-5 lg:ml-28 mt-5 w-96'>
              <img src={image} className=''></img>
          </div>
  
         
      </div>
       <div className={`text-3xl lg:mt-16 p-5 text-center `}>
       <p> “The law should be clear, concise, and easy to understand.” – Thomas Jefferson </p>
       </div>
    </div>
    
  </>

  )
}

export default Landing