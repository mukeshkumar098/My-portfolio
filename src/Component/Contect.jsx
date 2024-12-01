import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'

const Contect = () => {
  return (
    <section className='px-2 mt-1  flex justify-center items-center w-full  '>
    <div className='bg-[#0A1123] w-full rounded-[20px] pb-8'>


        <div className='text-white flex justify-center'>

            <div className='flex flex-col justify-center items-center'>
                <div>  <span ><FaLongArrowAltDown className='relative top-[-38px] z-10' size={25} color='white' /></span></div>
                <h1 className='relative bg-[#0A1123] mt-[-50px] py-2 px-5 border-2 border-cyan-200 rounded-[10px] text-xl font-bold text-cyan-200'>
                    Let's Connect
                </h1>
                <span ><FaLongArrowAltDown className='relative top-[-11px]' size={25} color='white' /></span>
            </div>
        </div>
        <div className='flex justify-between items-center flex-wrap py-2 px-5'>
            <div>
                <img src="MERN.webp" alt="" />
            </div>
            <div>
                <div>
                    <h3 className='text-sm  text-white  mb-0.5'>Name</h3>
                    <input className='text-sm border-cyan-200  text-white bg-slate-500   py-2 px-2 w-[400px] rounded outline-none bg-transparent placeholder:text-gray-500  border-2 mb-4 ' type="text" placeholder='Enter your name' />

                </div>
                <div>
                    <h3 className='text-sm  text-white  mb-0.5'>Your Email</h3>
                    <input className='text-sm border-cyan-200  text-white bg-slate-500  py-2 px-2  w-[400px] rounded outline-none placeholder:text-gray-500  bg-transparent border-2 mb-4 ' type="text" placeholder='Enter your Email' />

                </div>

                <div className=' w-[400px] flex flex-col items-start '>
                    <h3 className='text-sm   text-white  mb-0.5'>Message</h3>
                    <textarea className='w-full h-36 border-cyan-200  text-white bg-slate-500  text-sn py-2 px-4 rounded outline-none bg-transparent border-2  mb-4 ' name="" id="" cols='30' rows='10' placeholder='Hi...'></textarea>

                    <button className=' py-3 px-5 font-semibold bg-cyan-600 shadow-lg   hover:bg-cyan-400  rounded text-sm text-white mt-4 w-full'>SEND</button>

                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-col text-white justify-center items-center '>
                <div>
                    <h1 className='text-cyan-200'>Mukesh Kumar @ 2024</h1>
                </div>
                <img className='w-16' src="logo.jpg" alt="" />
                <div className='flex gap-4'>
                    <IoLogoInstagram size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' />
                    <FaTwitter size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' />
                    <FaLinkedinIn size={25} className='shadow-lg hover:text-cyan-200  bg-transparent text-cyan-200  ' />
                    <FaGithub size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' />

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contect