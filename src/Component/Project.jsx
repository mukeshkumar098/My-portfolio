import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'

const Project = () => {
    return (
        <>
            <section className='flex px-2 w-full  justify-center items-center'>
                <div className='bg-[#0A1123] w-full   rounded-[20px]'>
                    <div className='text-white flex justify-center'>

                        <div className='flex flex-col justify-center items-center'>
                            <div>  <span ><FaLongArrowAltDown className='relative top-[-38px] z-10' size={25} color='white' /></span></div>
                            <h1 className='relative bg-[#0A1123] mt-[-50px] py-2 px-5 border-2 border-cyan-200 rounded-[10px] text-xl font-bold text-cyan-200'>
                                Projects.
                            </h1>
                            <span ><FaLongArrowAltDown className='relative top-[-11px]' size={25} color='white' /></span>
                        </div>
                    </div>
                    <div>
                        <section  className='flex justify-center flex-wrap items-center text-white'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1>MY WORK</h1>
                                <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi? Alias minima, voluptate nisi porro nesciunt excepturi recusandae ea voluptas cum. Soluta, laborum.</p>
                                <section className='max-w-screen-xl max-auto px-4 relative pt-10'>

                                    <div className='flex flex-wrap justify-between items-center gap-44 relative'>

                                        <div className='h-[2px] left-1/4 right-1/2 bg-cyan-200 absolute top-1/2'></div>
                                        <div className='w-4 h-4 border-2 border-cyan-200 bg-[#0A1123] rounded-full left-1/2 -translate-x-1/2  absolute '></div>
                                        <div className=' flex flex-wrap w-96'>
                                            <a href="">
                                                <div className=' relative group hover:scale-105 ease-in-out duration-100'>

                                                    <span className='flex group-hover:-top-12 ease-jump   duration-200 bg-[#fc815c] px-5 absolute top-5 left-1/2 -translate-x-1/2 py-2 rounded w-max items-center after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 '>
                                                        walmart
                                                    </span>

                                                    <img src="walmart.webp" className='relative' alt="" />

                                                </div>
                                            </a>
                                        </div>
                                        <div className='w-96'>
                                        <h1 className='text-4xl   font-bold text-[#fc815c]  '>Walmart Clone</h1>
                                        <p className='text-[#fc815c] pt-2'>(E-commerce Web-site)</p>
                                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta aliquam voluptate asperiores modi quasi provident eaque. Deserunt libero veniam velit totam doloribus?</h1>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-wrap gap-44 mt-20 pb-7'>
                                        <div className='h-[2px] right-1/4 left-1/2 bg-cyan-200 absolute top-1/5'></div>
                                        <div className='w-4 h-4 border-2 border-cyan-200 bg-[#0A1123] rounded-full right-1/2 translate-x-1/2  absolute '></div>
                                        <div className='w-96'>
                                            <h1 className='text-4xl text-blue-700 font-bold '>ChatMK</h1>
                                            <p className='text-blue-700 pt-2'>(Open AI ChatBot)</p>
                                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta aliquam voluptate asperiores modi quasi provident eaque. Deserunt libero veniam velit totam doloribus?</p>
                                        </div>
                                        <div className=' flex w-96'>
                                            <a href="https://chat-app-ai-mk.onrender.com">
                                                <div className=' relative group hover:scale-105 ease-in-out duration-100'>

                                                    <span className='flex group-hover:-top-12 ease-jump   duration-200 bg-blue-700 px-5 absolute top-5 left-1/2 -translate-x-1/2 py-2 rounded w-max items-center after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 '>
                                                       ChatMk
                                                    </span>
                                                    <img src="walmart.webp" className='relative' alt="" />

                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div className='flex flex-col items-center justify-center '>
                                        <div className='w-5 h-5 bg-cyan-200 rounded-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>
                                        <div className='w-[2px] bg-cyan-200 absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>
                                    </div>

                                </section>

                            </div>


                        </section>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Project