import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoPerson } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";



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
                <div className='flex justify-around   flex-wrap py-2 px-5'>
                    <div>
                        <img src="MERN.webp" alt="" />
                    </div>
                    <form className='flex  flex-col justify-center items-center'>
                        <div className='relative'>
                            <h3 className='text-sm  text-white  mb-0.5'>Name</h3>
        
                            <input className='text-sm  border-cyan-200  text-white bg-slate-500   py-2 px-7 w-80 lg:w-[400px]  rounded outline-none bg-transparent placeholder:text-gray-500   border-2 mb-4 ' type="text" placeholder='Enter your name' />
                            <IoPerson  className='absolute text-slate-500  text-[17px] ml-2  top-8' />
                        </div>
                        <div className='relative'>
                            <h3 className='text-sm  text-white  mb-0.5'>Your Email</h3>
                            <input className='text-sm border-cyan-200  text-white bg-slate-500  py-2 px-8 w-80  lg:w-[400px] rounded outline-none placeholder:text-gray-500  bg-transparent border-2 mb-4 ' type="text" placeholder='Enter your Email' />
                            <MdOutlineMailOutline  className='absolute text-slate-500  text-[19px] ml-2  top-[33px]' />
                        </div>

                        <div className=' w-80 relative lg:w-[400px] flex flex-col items-start '>
                            <h3 className='text-sm   text-white  mb-0.5'>Message</h3>
                            <textarea className='w-full h-36 border-cyan-200  text-white bg-slate-500  text-sn py-2 px-7 rounded outline-none bg-transparent border-2  mb-4 ' name="" id="" cols='30' rows='10' placeholder='Hi...'></textarea>
                            <MdOutlineMessage  className='absolute text-slate-500  text-[17px] ml-2  top-9' />
                            <button className=' py-3 px-5 font-semibold bg-cyan-600 shadow-lg   hover:bg-cyan-400  rounded text-sm text-white mt-4 w-full'>SEND</button>

                        </div>
                    </form>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col text-white justify-center items-center '>
                        <div>
                            <h1 className='text-cyan-200'>Mukesh Kumar @ 2024</h1>
                        </div>
                        <img className='w-16' src="logo.jpg" alt="" />
                        <div className='flex gap-4'>   <ul className='flex  gap-4 text-white'>

                            <li><a href="">  <IoLogoInstagram size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' /></a></li>
                            <li><a href="">  <FaTwitter size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' /></a></li>
                            <li><a href=""> <FaLinkedinIn size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' /></a></li>
                            <li><a href=""><FaGithub size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' /></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contect