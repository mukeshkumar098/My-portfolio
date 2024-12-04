import React, { useState } from 'react'
import { PiDotsNineLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";

const Header = () => {

  const [bar, setBar] = useState(false)
  return (
    <>
      <div className='w-full sticky top-0 left-0 right-0 z-30 border-[1px] border-b-cyan-200 rounded-b-[20px] px-2 h-auto  bg-white flex  justify-center '>

        <div className='flex w-full px-1 rounded-b-sm  justify-between items-center bg-[#0A1123]'>
          <img className='w-16 ml-10' src="/logo01.jpg" alt="logo" />

          <div className=' w-full z-10 flex justify-end items-center p-5'>
            <button className='text-white font-semibold hover:bg-cyan-200  text-[15px] bg-black px-4 py-2 rounded-full border-2 !border-cyan-200 '>
              Hire Me
            </button>
            <div className=''>
            <FaBars size={45} className='block text-white pl-6 z-10   sm:hidden ' />
            {bar && <div>

            </div>}
            </div>

            <PiDotsNineLight className='hidden lg:block ml-2 text-4xl text-white' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header