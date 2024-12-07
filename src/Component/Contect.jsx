import React, { useRef } from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoPerson } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { motion, px } from 'framer-motion';


const Contect = () => {
    const aboutSectionRef = useRef(null);
    return (
        <section className=' flex justify-center items-center w-full  '>
            
            <div className=' bg-black w-full pb-1'>


                <div className='text-white flex justify-center'>

                    <div className='flex flex-col justify-center items-center'>

                        <h1 className='relative bg-[#0A1123]  py-2 px-5 border-2 border-cyan-200 rounded-[10px] text-xl font-bold text-cyan-200'>
                            Let's Connect
                        </h1>
                        <span ><FaLongArrowAltDown className='relative top-[-11px]' size={25} color='white' /></span>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                    <div className='flex justify-around pt-12  flex-wrap py-2 px-5'>
                        <div>
                            <img src="MERN.webp" alt="" />
                        </div>
                        <form className='flex mb-20 flex-col justify-center items-center'>
                            <div className='relative'>
                                <h3 className='text-sm  text-white  mb-0.5'>Name</h3>

                                <input className='text-sm sm:w-96  border-cyan-200  text-white !bg-slate-800   py-3 px-7 w-80 lg:w-[400px]  rounded outline-none bg-transparent placeholder:text-gray-200   border-2 mb-4 ' type="text" placeholder='Enter your name' />
                                <IoPerson className='absolute text-slate-200  text-[17px] ml-2  top-9' />
                            </div>
                            <div className='relative'>
                                <h3 className='text-sm  text-white  mb-0.5'>Your Email</h3>
                                <input className='text-sm sm:w-96 border-cyan-200  text-white !bg-slate-800  py-3 px-8 w-80  lg:w-[400px] rounded outline-none placeholder:text-gray-200  bg-transparent border-2 mb-4 ' type="text" placeholder='Enter your Email' />
                                <MdOutlineMailOutline className='absolute text-slate-200  text-[19px] ml-2  top-[37px]' />
                            </div>

                            <div className=' w-80 sm:w-96 relative lg:w-[400px] flex flex-col items-start '>
                                <h3 className='text-sm   text-white  mb-0.5'>Message</h3>
                                <textarea className='w-full h-36 border-cyan-200  text-white !bg-slate-800 placeholder:text-gray-200  text-sn py-2 px-7 rounded outline-none bg-transparent border-2  mb-4 ' name="" id="" cols='30' rows='10' placeholder='Hi...'></textarea>
                                <MdOutlineMessage className='absolute text-slate-200  text-[17px] ml-2  top-9' />
                                <button className=' py-3 px-5 font-semibold bg-cyan-600 shadow-lg   hover:bg-cyan-400  rounded text-sm text-white mt-4 w-full'>SEND</button>

                            </div>
                        </form>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                    <div className='flex justify-center'>
                        <div className='flex flex-col text-white justify-center items-center '>
                            <div>
                                <div className='flex text-cyan-200 items-center gap-1'>
                                <IoPerson size={18}/>
                                    <h1 className='text-cyan-200'>Mukesh Kumar @ 2024</h1>
                                </div>
                                <div className='flex text-cyan-200 gap-1 items-center justify-center'>
                                <MdOutlineMailOutline size={18}/>
                                    <h1 className='text-cyan-200 text-sm'>mukeshkemar567@gmail.com</h1>
                                </div>
                                <div className='flex justify-center text-cyan-200 text-[15px]'>
                                    <p>+91-9837819163</p>
                                </div>
                            </div>
                            <img className='w-16 ' src="logos.png" alt="" />
                            <div className='flex gap-4 pt-1'>   <ul className='flex  gap-4 text-white'>

                                <li><a href="https://www.instagram.com/_darksoullll_/" target='_black'>  <IoLogoInstagram size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' /></a></li>
                                <li><a href="">  <FaTwitter size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' /></a></li>
                                <li><a href="https://www.linkedin.com/in/mukesh-kumar-71bb01265/" target='_black'> <FaLinkedinIn size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' /></a></li>
                                <li><a href="https://github.com/mukeshkumar098" target='_black'><FaGithub size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' /></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Contect