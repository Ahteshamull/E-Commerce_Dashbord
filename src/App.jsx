import React from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Notification from './pages/Notification'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  )
}
