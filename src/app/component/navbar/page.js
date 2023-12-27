"use client"

import React from 'react'
import UserDropdown from '../user-dropdown/page';

export default function Navbar() {
  return (
    <div 
    className='bg-[#23303F] shadow-md h-16 flex items-center justify-between'
    >
      <p className='text-[#6ba814] text-2xl font-bold ml-14 mt-2'>Nutri Snap</p>
      <UserDropdown />
    </div>
  )
}