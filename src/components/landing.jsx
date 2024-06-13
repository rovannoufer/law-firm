import React from 'react'
import image from "../img/2.jpg"

function Landing() {
  return (
  <>
    <div className=' flex bg-black h-[100%] text-white p-28 items-center'>
        
        <div className='flex w-1/2 text-lg '>
        <p> Indian law is a vast and complex system rooted in its Constitution, which guarantees fundamental rights to all citizens. 
            It encompasses various legal domains, including criminal, civil, corporate, and family law, ensuring justice and equality.
             The Indian judiciary, with the Supreme Court at its apex, plays a crucial role in interpreting and enforcing laws.
              Landmark legislations like the Indian Penal Code, Contract Act, and Companies Act form the backbone of legal governance.
             Our firm is dedicated to navigating this intricate legal landscape to provide expert guidance and representation. </p>
        
       
        </div>
        <div className='w-1/2 p-5 ml-28'>
            <img src={'src/img/1.jpg'}></img>
        </div>

       
    </div>
     <div className={`bg-[url(${image})]  text-center text-3xl mt-16 p-5 text-center`}>
     <p> “The law should be clear, concise, and easy to understand.” – Thomas Jefferson </p>
 </div>
  </>

  )
}

export default Landing