import React from 'react'
import Landing from './components/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Law from './components/law';
import Error404 from './pages/error';



function App() {
  return (
   <>
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

              
              


          </Route>
          <Route path="*" element={<Error404 />} />
      </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App