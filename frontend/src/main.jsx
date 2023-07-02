import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home.jsx'
import Navbar from './Components/Navbar'
import NotFound from './Pages/NotFound/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='w-full min-h-screen bg-slate-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode >,
)
