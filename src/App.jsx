import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './index.css'





function App() {


  return (
    <>
  
         <BrowserRouter>
            <div className='flex md:justify-center container h-screen '>
            
                        <div className=' mt-0 h-screen '>
                       
                            <Routes>
                                <Route path='/' element={<Home />} />
                            
                            </Routes>
                        </div>
            </div>  
        </BrowserRouter>
       
    </>
  )
}


export default App