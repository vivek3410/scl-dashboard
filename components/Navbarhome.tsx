import React from 'react'
import Buttonnavhome from './Buttonnavhome'

export default function Navbarhome() {
  return (
    <>
      <nav className='flex items-center justify-between w-[100vw] bg-slate-700 text-white h-10 shadow-md z-[40] absolute top-0'>
        <div className='p-6'>
          <h1>demo</h1>
        </div>
        <div className='hidden md:flex items-center gap-[10px] p-2'>
          <Buttonnavhome />
        </div>
      </nav>
    </>
  )
}
