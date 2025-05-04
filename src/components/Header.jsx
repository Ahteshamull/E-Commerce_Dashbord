import React from 'react'
import  {Link}  from 'react-router'
import Logo from '../assets/images/Dashboard.png'

export default function Header() {
  return (
    <header className='d-flex align-items-center'>
        <div className='container-fluid w-100'>
            <div className='row d-flex align-items-center'>
              <div className='col-xs-3'>
               <Link to='/'>
               <img src={Logo} className='logo' alt="Logo" />
               </Link>
              </div>
            </div>
        </div>
      
    </header>
  )
}
