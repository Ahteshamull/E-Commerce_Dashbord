import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  return (
    <div className='search position-relative d-flex align-items-center'>
        <FaSearch className='mr-2'/>
      <input type="text" placeholder='Search Here...' />
    </div>
  )
}
