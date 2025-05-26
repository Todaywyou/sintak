import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/Kontak.jsx'
import AboutPage from './pages/AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/about' element ={<AboutPage/>}/>
<Route path='/Kontak'element = {<ContactPage/>} />

</Routes>
  
</BrowserRouter>

  </StrictMode>,
)
