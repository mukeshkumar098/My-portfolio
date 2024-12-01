import React, { useEffect, useRef, useState } from 'react'
import TitleText from '../Component/TitleText'
import { useGSAP } from '@gsap/react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import Header from '../Component/Header/Header';

import Contect from '../Component/Contect';
import Project from '../Component/Project';



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
        }, 100); // Adjust speed of typing (100ms per character)

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    // const tiltRef = useRef(null)
    // const [xVal, setXVal] = useState(0)
    // const [yVal, setYVal] = useState(0)
    // const mouseMoving = (e) => {
    //     setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 20);
    //     setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20);

    //     tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
    //     console.log(tiltRef.current.getBoundingClientRect());

    // }
    // useGSAP(function () {
    //     gsap.to(tiltRef.current, {
    //         transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
    //         duration: 3,
    //         ease: `elastic.out(1,0,2)`
    //     })
    // }[xVal, yVal])
    return (
        <>
{/* 
bg-[url('logo.jpg')] */}
            <div onMouseMove={(e) => {
                mouseMoving(e)
            }} className='h-screen px-2 py-1 bg-white flex items-center justify-center '>
 
                <div  className="  h-full  w-full rounded-[20px] bg-[#0A1123] bg-cover bg-left bg-no-repeat ">
                  <Header/>
                    <div className='flex justify-between flex-wrap gap-24 mt-16  items-center  '>
                        <div className='pl-10 '>
                            <div id='tilt-div' >
                                <div className='flex gap-5 justify-start'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-4 h-4 bg-cyan-200 rounded-full'></div>
                                        <div className="line"></div>
                                    </div>
                                    <div>

                                        <h1 className='text-4xl font-serif text-white font-bold'>I am <span className='text-4xl  font-serif text-indigo-400'>{text}</span></h1>
                                        <h1 className='font-bold text-white text-[2.6vw]'>FULL-STACK DEVELOPER</h1>
                                    </div>
                                </div>
                            </div>

                            <div className=' px-10 mt-6      '>
                                <div className='flex items-center'>
                                    <button className="btn relative font-sans px-4 py-2 bg-cyan-600 shadow-lg shadow-cyan-300  hover:bg-cyan-400  rounded-xl font-bold text-white text-[17px]" onClick={() => document.getElementById('my_modal_3').showModal()}>About me</button>
                                    <span><FaLongArrowAltRight className='relative left-[-13px]' size={25} color='white' />
                                    </span>
                                </div>
                                <dialog id="my_modal_3" className="modal  rounded-md  bg-[rgb(10,17,30)] shadow-lg shadow-cyan-300 ">
                                    <div className="modal-box p-6">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 py-1 pr-3 text-cyan-200">✕</button>
                                        </form>
                                        <div className='flex justify-between  '>
                                            <div>
                                                <div className='py-5 px-8  w-[500px] '>
                                                    <h1 className='font-bold text-xl text-cyan-200'>ABOUT ME</h1>
                                                    <p className='pt-4 text-cyan-400'>I am a dedicated and versatile full-stack developer with a passion for building end-to-end web solutions. Skilled in creating responsive front-end interfaces and efficient back-end systems, I specialize in delivering robust, scalable, and user-friendly applications.</p>
                                                </div>
                                                <div className='px-8 w-[500px] '>
                                                    <div className='flex flex-wrap items-center gap-3 text-[15px] text-cyan-400 '>
                                                        <p className='p-2  rounded-full border-2 border-black'>javaScript</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>C</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>C++</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>Python</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>HTML</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>jCSS</p>
                                                        <p className='p-2  rounded-full border-2 border-black'>javaScript</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>C</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>C++</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>Python</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>HTML</p>
                                                        <p className='p-2 rounded-full border-2 border-black'>jCSS</p>
                                                    </div>


                                                </div>
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
                        <div className='flex justify-between items-center gap-24'>
                            <div className=' relative w-96 h-96 rounded-[50%] shadow-2xl z-0  shadow-cyan-200 bg-cyan-400 -overflow-y-hidden '>
                                <img className='w-80 absolute image rounded-[40%]  -top-28  left-7 ' src="mukesh1.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-5 pr-4 text-white'>
                                <IoLogoInstagram size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200  ' />
                                <FaTwitter size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' />
                                <FaLinkedinIn size={25} className='shadow-lg hover:text-cyan-200  bg-transparent text-cyan-200  ' />
                                <FaGithub size={25} className='shadow-lg hover:text-cyan-400  bg-transparent text-cyan-200 ' />
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
            <Project/>
            <Contect/>
          
        </>
    )
}

export default Page1