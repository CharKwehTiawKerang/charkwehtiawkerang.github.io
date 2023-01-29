import React from 'react'
import { Route, Routes } from 'react-router-dom'

import "antd/dist/reset.css";

import { Navbar, Home, Services, Shop, Aboutus, Contactus, Footer, SmoothScroll,  PageNotFound } from './components'
import './App.css'

const App = () => {
  return (
    <>
        <div className='app'>
            <Navbar />

            <SmoothScroll>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/shop' element={<Shop />} />
                <Route exact path='/aboutus' element={<Aboutus />} />
                <Route exact path='/contactus' element={<Contactus />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </SmoothScroll>

            <Footer />
        </div>
    </>
  )
}

export default App