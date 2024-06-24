import React, { useEffect, useState } from 'react'
import Landing from './components/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Law from './components/law';
import Error404 from './pages/error';
import Loading from './components/loading';
import About from './pages/about';




function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
 
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[])

  return (
   <>
    {
      loading ? <Loading /> :
      <BrowserRouter> 
      <Routes>
          <Route path='/' element={<Home />}>
              <Route path='/' element={ <Landing />}/>
              <Route path='/ipc' element={ <Law type={"ipc"} />}/>
              <Route path='/crpc' element={ <Law type={"crpc"} />}/>
              <Route path='/ida' element={ <Law type={"ida"} />}/>
              <Route path='/iea' element={ <Law type={"iea"} />}/>
              <Route path='/cpc' element={ <Law type={"cpc"} />}/>
              <Route path='/mva' element={ <Law type={"mva"} />}/>
              <Route path='/nia' element={ <Law type={"nia"} />}/>
              <Route path='/about' element={ <About />}/>

              <Route path="*" element={<Error404 />} />
          </Route>
      </Routes>
    
    </BrowserRouter> 
    }
   </>
  )
}

export default App