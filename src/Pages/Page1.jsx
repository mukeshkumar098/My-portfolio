import React, { useEffect, useRef, useState } from 'react'

import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import Header from '../Component/Header/Header';
import { motion, px } from 'framer-motion';
import Contect from '../Component/Contect';
import Project from '../Component/Project';
import { MdOutlineMailOutline } from 'react-icons/md';



const Page1 = () => {

    const [text, setText] = useState(""); // Holds the animated sentence text
    const sentence = "Muukesh Kumar ";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + sentence[index]);
            index += 1;
            if (index === sentence.length - 1) {
                clearInterval(interval); // Stop when the sentence is completed
            }
        }, 200); // Adjust speed of typing (100ms per character)

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
    return (
        <>
            {/* 
bg-[url('logo.jpg')] */}
            {/* // bg-cover bg-left bg-no-repeat  */}
            <Header />
            <div onMouseMove={(e) => {
                mouseMoving(e)
            }} className='  bg-white flex items-center justify-center  '>

                <div className="h-full  w-full rounded-[0px 0px 20px] bg-black bg-[url('bgmain.gif')] bg-cover bg-left bg-no-repeat  ">
                    <div className='bg-no-repeat relative' >

                        <div className='  lg:flex lg:justify-between lg:items-center lg:gap-24 lg:mt-10 lg:pt-0 '>
                            <div className='lg:pl-14 mt-10 '>
                                <div id='tilt-div' >
                                    <div className='flex gap-4 justify-start '>
                                        <div className='flex flex-col items-center'>
                                            <div className='w-4 h-4 bg-cyan-200 rounded-full'></div>
                                            <div className="line"></div>
                                        </div><div>
                                            <div className='tilt '>

                                                <h1 className='text-6xl font-serif text-white font-bold'>I am <span className='text-5xl  font-serif text-cyan-400'>{text}</span></h1>
                                                <h1 className='font-bold text-white text-[2.6vw]'>FULL-STACK DEVELOPER</h1>
                                                <div className='flex gap-1 items-center text-white '>
                                                    <MdOutlineMailOutline className='sm:hidden hidden lg:block lg:mt-1 lg:size-4 sm:size-1' />
                                                    <p className='sm:hidden hidden lg:block font-semibold text-white text-[1.2vw]'>mukeshkemar567@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className='hidden lg:flex lg:items-center lg:py-8 '>
                                                <button className=" btn relative font-sans px-6 py-2 bg-cyan-600 shadow-lg  hover:bg-cyan-900  rounded-xl font-bold text-white text-[17px]" onClick={() => document.getElementById('my_modal_3').showModal()}>About me</button>
                                                {/* <span><FaLongArrowAltRight className=' lg:left-[-13px]' size={25} color='white' />
                                                </span> */}
                                            </div>
                                            <div className='lg:hidden pt-5'>
                                                <a href="#about-me"><button className=" font-sans px-6 py-2 border-2 border-cyan-200 bg-[#0A1123] shadow-lg  hover:bg-cyan-900  rounded-xl font-bold text-cyan-200 text-[17px]">About me</button></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className=' px-10 mt-6      '>

                                    <dialog id="my_modal_3" className="modal  rounded-md  bg-black shadow-lg shadow-blue-400  ">
                                        <div className="modal-box p-6">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 py-1 pr-3 text-cyan-200">✕</button>
                                            </form>
                                            <div className='flex justify-between  '>
                                                <div>
                                                    <div className='py-5 px-8  w-[500px] '>
                                                        <h1 className='font-bold text-2xl text-cyan-300'>ABOUT ME</h1>
                                                        <p className='pt-4 text-lg text-cyan-500'>I am a dedicated and versatile full-stack developer with a passion for building end-to-end web solutions. Skilled in creating responsive front-end interfaces and efficient back-end systems, I specialize in delivering robust, scalable, and user-friendly applications.</p>
                                                    </div>
                                                    <div className='px-8 w-[500px] '>
                                                        <div className='flex flex-wrap items-center gap-3 text-[15px] text-cyan-500 '>
                                                            <p className='p-2 px-3  rounded-lg border border-cyan-200'>javaScript</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>C</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>C++</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>Python</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>HTML</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>CSS</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>javaScript</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>react</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>Bootstrap</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>Tailwind CSS</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>jQuery</p>
                                                            <p className='p-2 px-3 rounded-lg border-2 border-cyan-200'>Java</p>
                                                        </div>border-cyan-200                                       </div>
                                                    <div className='py-5 px-8 '>
                                                        <h1 className='font-bold text-xl text-cyan-200 '>MERN STACK</h1>

                                                        <img className='w-36 py-2 ' src="mern-stack.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className=' relative mt-24 w-72 h-72 rounded-full shadow-2xl z-0  shadow-cyan-200 bg-cyan-400  -overflow-y-hidden '>
                                                    <img className='w-[250px] absolute rounded-[40%] -top-24 left-3  ' src="mukesh1.png" alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    </dialog>
                                </div>
                            </div>
                            <div>
                                <div>

                                </div>
                            </div>
                            <div className='hidden lg:flex lg:justify-between justify-center  items-center lg:gap-24'>
                                <div className=' relative mt-16 w-72 h-72 lg:w-96 lg:h-96 rounded-[50%] shadow-2xl z-0 bg-[url("logos.png")] -overflow-y-hidden '>

                                </div>
                                <div className=''>
                                    <ul className=' hidden lg:flex lg:flex-col lg:gap-5 lg:pr-4 lg:text-white'>

                                        <li><a href="https://www.instagram.com/_darksoullll_/" target='_black'>  <IoLogoInstagram size={30} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' /></a></li>
                                        <li><a href="">  <FaTwitter size={30} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' /></a></li>
                                        <li><a href="https://www.linkedin.com/in/mukesh-kumar-71bb01265/" target='_black'> <FaLinkedinIn size={30} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' /></a></li>
                                        <li><a href="https://github.com/mukeshkumar098" target='_black'><FaGithub size={30} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' /></a></li>
                                    </ul>




                                </div>
                            </div>

                        </div>
                    </div>

                    <div id='about-me' className='w-full  lg:hidden flex  justify-center  items-center'>
                        <div className=' mt-24 pb-14  gap-10 flex flex-col   justify-center  items-center lg:gap-24'>
                            <div className=' relative w-72 h-72 lg:w-96 lg:h-96 rounded-[50%] shadow-2xl z-0  shadow-cyan-200 bg-cyan-400 -overflow-y-hidden '>
                                <img className='w-60 lg:w-80 absolute image rounded-[40%] -top-[77px] lg:-top-28  left-7 ' src="mukesh1.png" alt="" />
                            </div>
                            <div className='w-100 sm:w-[70vw] text-cyan-500 '>
                                <div className=''>
                                    <h1 className='text-cyan-400 text-xl font-bold px-0 '>ABOUT ME</h1>
                                    <div className=''>

                                        <h1 className=' w-[80vw]'>I am a dedicated and versatile full-stack developer with a passion for building end-to-end web solutions. Skilled in creating responsive front-end interfaces and efficient back-end systems, I specialize in delivering robust, scalable, and user-friendly applications.</h1>

                                    </div></div>
                            </div>
                            <div className=''>
                                <h1 className='text-cyan-400 font-bold text-xl'>Skills</h1>
                                <ul className='w-80 sm:w-[70vw] gap-4 mt-2 flex flex-wrap   text-cyan-500'>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>C</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>C++</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>Python</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>HTML5</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>CSS</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>JavaScript</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>Java</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>Bootstrap</li>
                                    <li className='px-3 py-2 rounded-lg border-2 border-cyan-200 '>Tailwind CSS</li>

                                </ul>
                            </div>
                            <div className='flex justify-center'>
                                <img className='w-44' src="mernp.png" alt="" />
                            </div>
                        </div>

                    </div>
                    {/*                   
                    <div className='h-screen w-full lg:hidden text-white flex justify-center -top-8'>
                        <div className='flex flex-col justify-center pt-4 items-center'>
                            <h1 className='bg-[rgb(10,17,35)] py-2 px-5 border-2 border-cyan-200 rounded-[10px] text-xl font-bold text-cyan-200'>Skils</h1>
                            
                        </div>
                    </div> */}

                    <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                        <div className='text-white flex justify-center -top-8'>

                            <div className='flex flex-col justify-center pt-4 items-center'>

                                <h1 className='relative bg-[#0A1123] py-2 px-5 border-2 border-cyan-200 rounded-[10px] text-xl font-bold text-cyan-200'>
                                    Projects.
                                </h1>
                                <span ><FaLongArrowAltDown className='relative top-[-11px]' size={25} color='white' /></span>
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
            <hr className='text-cyan-200 ms:mx-8' />
            <Project />
            <Contect />

        </>
    )
}

export default Page1