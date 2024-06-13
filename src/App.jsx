import React from 'react'
import Landing from './components/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import IPC from './components/ipc';


function App() {
  return (
   <>
    <BrowserRouter> 
      <Routes>
          <Route path='/' element={<Home />}>
              <Route path='/' element={ <Landing />}/>
              <Route path='/ipc' element={ <IPC />}/>
          </Route>
      </Routes>
    
    </BrowserRouter>
   </>
  )
}

export default App