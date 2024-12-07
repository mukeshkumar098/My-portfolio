import React, { useRef, useState } from 'react'
import { PiDotsNineLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { IoPerson } from 'react-icons/io5';
import { AiFillProject } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-scroll';
import Contect from '../Contect';

import { ImCross } from "react-icons/im";


const Header = () => {

  const [bar, setBar] = useState(false)
 
  return (
    <>
      <div    className='w-full sticky top-0 left-0 right-0 z-30 h-auto  bg-white flex  justify-center '>

        <div className='flex w-full px-1  justify-between items-center bg-black'>
          <img className='w-16 ml-10' src="/logos.png" alt="logo" />

          <div className=' w-full z-10 flex justify-end items-center gap-2 p-5'>
              <ul className='hidden sm:blok sm:flex justify-between text-white gap-6 mr-4'>
                <li  className='hover:text-cyan-200 cursor-pointer'>About </li>
                <li className='hover:text-cyan-200 cursor-pointer'>Contect</li>
                <li className='hover:text-cyan-200 cursor-pointer'>Project</li>
              </ul>
            <button className='text-white font-semibold hover:bg-cyan-200  text-[15px] bg-black px-4 py-2 rounded-full border-2 !border-cyan-200 '>
              Hire Me
            </button>
            <div className=''>
            <FaBars onClick={()=>setBar(!bar)} size={40} className='block text-white p-2 z-10   sm:hidden ' />
            {bar && <div className='sm:hidden absolute  text-white right-4  top-20'>
              <div className='w-52  bg-black shadow-lg shadow-cyan-200 -950 rounded-lg'>
               <div onClick={()=>setBar(!bar)} className='text-white  flex px-5 py-1 justify-end'><ImCross size={12}/></div>
                <ul className='flex  py-2 px-10 flex-col gap-8 pb-10 '>
                  <li className='flex items-center text-xl gap-2'><IoPerson size={20}/><p>About</p></li>
                  <li className='flex items-center text-xl gap-2'><FaPhoneAlt size={20}/><p>Contect</p></li>
                  <li className='flex items-center text-xl gap-2'><AiFillProject size={20}/><p>Project</p></li>
                </ul>
              </div>
            </div>}
            </div>

            <PiDotsNineLight className='hidden lg:block  text-4xl text-white' />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Header