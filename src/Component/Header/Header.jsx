import React from 'react'
import { PiDotsNineLight } from "react-icons/pi";
const Header = () => {
  return (
    <><div className='flex justify-between items-center'>
      <img className='w-16 ml-10' src="/logo01.jpg" alt="logo" />
   
        <div className=' w-full z-10 flex justify-end items-center p-10'>
            <button className='text-white font-semibold hover:bg-cyan-200  text-[15px] bg-black px-4 py-2 rounded-full border-2 !border-cyan-200 '>
               Hire Me
            </button>
            <PiDotsNineLight className='ml-2 text-4xl text-white'/>
        </div>
        </div>
    </>
  )
}

export default Header