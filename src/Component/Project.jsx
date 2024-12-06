import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { motion, px } from 'framer-motion';

const Project = () => {
    return (
        <>
            <section className='flex  w-full  justify-center items-center'>
                <div className=' bg-black w-full '>
                    <div className='flex justify-center mt-7 '><div className='fex flex-col justify-center items-center'>
                    <h1 className='font-bold text-cyan-200 text-2xl'>MY WORK</h1>
                    <div className=' bg-cyan-200 h-[3px] w-30'></div>
                    </div>
                    </div>
                    <div>
                        <section className='project sm:block lg:block flex justify-center flex-wrap items-center text-white'>

                            <div className='flex flex-col items-center justify-center'>
                            <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                {/* <h1>MY WORK</h1>
                                <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi? Alias minima, voluptate nisi porro nesciunt excepturi recusandae ea voluptas cum. Soluta, laborum.</p> */}
                                </motion.div>
                                <section className='max-w-screen-xl max-auto px-4 relative pt-10'>
                                <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                    <div className='flex flex-wrap justify-between items-center gap-44 relative'>

                                        <div className='h-[2px] left-1/4 right-1/2 bg-cyan-200 absolute top-1/2'></div>
                                        <div className='w-8 h-8 p-[1px] z-10 border-2 border-cyan-200 bg-[#0A1123] rounded-full left-1/2 -translate-x-1/2  absolute '><img src="Walmart-Logo.png" className='z-10 ' alt="" /></div>
                                        <div className=' flex flex-wrap  lg:w-96 sm:w-60'>
                                            <a href="">
                                                <div className=' relative group hover:scale-105 ease-in-out duration-100'>
                                                    <span className='flex group-hover:-top-12 ease-jump   duration-200 bg-[#fc815c] px-5 absolute top-5 left-1/2 -translate-x-1/2 py-2 rounded w-max items-center after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 '>
                                                        walmart
                                                    </span>
                                                    
                                                    
                                                        <img src="walmart.webp" className='relative rounded-2xl bg-transparent  shadow-[0px_20px_50px_rgba(59,130,246,0.8)]' alt="" />
                                                        
                                                        <img className=' absolute lg:w-[314px] sm:w-[197px] sm:h-[126px] sm:top-[15px] sm:left-[23px] lg:h-[200px] lg:top-[24px] z-20 lg:left-[38px]' src="lep2.png" alt="" />
                                                        </div>
                                                
                                                
                                            </a>
                                        </div>
                                        <div className='lg:w-[30vw] sm:w-60 '>
                                            <h1 className='text-4xl   font-bold text-[#fc815c]  '>Walmart Clone</h1>
                                            <p className='text-[#fc815c] pt-2'>(E-commerce Web-site)</p>
                                            <h1 className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta aliquam voluptate asperiores modi quasi provident eaque. Deserunt libero veniam velit totam doloribus?</h1>
                                        </div>
                                    </div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                    <div className='flex items-center flex-wrap gap-44 pb-14 mt-20'>
                                        <div className='h-[2px] right-1/4 left-1/2 bg-cyan-200 absolute top-1/5'></div>
                                        <div className='w-8 h-8 z-10 p-[2px] border-2 border-cyan-200 bg-[#0A1123] rounded-full right-1/2 translate-x-1/2  absolute '><a href="https://chat-app-ai-mk.onrender.com"><img className='rounded-full' src="logos.jpg" alt="" /></a></div>
                                        <div className='lg:w-[30vw] sm:w-60 '>
                                            <h1 className='text-4xl text-blue-700 font-bold '>ChatMK</h1>
                                            <p className='text-blue-700 pt-2'>(Open AI ChatBot)</p>
                                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta aliquam voluptate asperiores modi quasi provident eaque. Deserunt libero veniam velit totam doloribus?</p>
                                        </div>
                                        <div className=' flex lg:w-96 sm:w-60'>
                                            <a href="https://chat-app-ai-mk.onrender.com">
                                                <div className=' relative group hover:scale-105 ease-in-out duration-100'>

                                                    <span className='flex group-hover:-top-12 ease-jump   duration-200 bg-blue-700 px-5 absolute top-5 left-1/2 -translate-x-1/2 py-2 rounded w-max items-center after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 '>
                                                        ChatMk
                                                    </span>
                                                    <div className='relative'>

                                            
                                                    <img src="walmart.webp" className='relative  shadow-[0px_20px_50px_rgba(59,130,246,0.8)]' alt="" />
                                                    <img className='absolute lg:w-[314px] sm:w-[197px] sm:h-[126px] sm:top-[15px] sm:left-[23px] lg:h-[200px] lg:top-[24px] z-20 lg:left-[38px] ' src="lep1.png" alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    </motion.div>
                                    <div className='flex flex-col items-center justify-center '>
                                        {/* <div className='w-5 h-5 bg-cyan-200 rounded-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div> */}
                                        <div className='w-[2px] bg-cyan-200 absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>
                                    </div>

                                </section>

                            </div>


                        </section>







                        <section className='lg:hidden sm:hidden  w-full flex justify-center  items-center text-white '>
                            <div className='w-80 flex flex-col items-center justify-center '>
                               
                                {/* <p className='pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi? Alias minima, voluptate nisi porro nesciunt  cum. Soluta, </p> */}
                                <div className=' relative mt-10'>
                                    <div className='w-full  pl-16 '>
                                        <div className='relative'>

                                        <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                            <div className=' flex flex-wrap '>
                                                <a href="">
                                                    <div className=' relative group ease-in-out duration-100'>
                                                        <span className='flex group-hover:-top-12 ease-jump   duration-200 bg-[#fc815c] px-5 absolute top-5 left-1/2 -translate-x-1/2 py-2 rounded w-max items-center after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 '>
                                                            walmart
                                                        </span><div className='relative'>
                                                        <img src="walmart.webp" className='relative w-72 z-10 shadow-2xl shadow-blue-500/50' alt="" />
                                                        
                                                       
                                                        <div className='h-[2px] -left-[70px] right-44  bg-cyan-200 absolute top-1/2 z-0'></div>
                                                        <div className='w-8 h-8 border-2 p-1 border-cyan-200 bg-[#0A1123] bg-[url("walmart.webp")] rounded-full -left-[26%] top-[41%] absolute z-10 '><img src="Walmart-Logo.png" className='z-10 ' alt="" /></div>
                                                        <img className='absolute w-[238px] h-[148px] top-[20px] z-20 left-7 ' src="lep2.png" alt="" />
                                                    </div>
                                                    </div>
                                                </a>
                                            </div>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                            <div className='ml-2'>
                                                <h1 className='text-2xl   font-bold text-[#fc815c]  '>Walmart Clone</h1>
                                                <p className='text-[#fc815c] pt-2'>(E-commerce Web-site)</p>
                                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta aliquam voluptate asperiores modi quasi provident eaque. ?</h1>
                                            </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center w-full mt-20 pb-7 pl-16'>
                                    <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                        <div className=' w-90 flex '>
                                            <a href="https://chat-app-ai-mk.onrender.com">
                                                <div className=' relative group  ease-in-out duration-100'>

                                                    <span className='flex group-hover:-top-12 ease-jump   duration-200 bg-blue-700 px-5 absolute top-5 left-1/2 -translate-x-1/2 py-2 rounded w-max items-center after:content-[""] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-1 '>
                                                        ChatMk
                                                    </span><div className='relative w-72'>
                                                    <img src="walmart.webp" className='relative w-72 z-10 shadow-2xl shadow-blue-500/50' alt="" />
                                                    <img className='absolute w-[238px] h-[148px] top-[20px] z-20 left-7 ' src="lep1.png" alt="" />
                                                    </div>
                                                    <div className='h-[2px] -left-16 right-44  bg-cyan-200 absolute top-1/2 z-0'></div>
                                                    
                                                <div className='w-8 h-8 border-2 p-1 border-cyan-200 bg-[#0A1123] bg-[url("walmart.webp")] rounded-full -left-[26%] top-[41%] absolute z-10 '><a href="https://chat-app-ai-mk.onrender.com"><img className='rounded-full' src="logos.jpg" alt="" /></a></div>
                                             
                                                </div>
                                            </a>
                                        </div>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, y: 110 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1.5 }}>
                                        <div className='ml-2'>
                                            <h1 className='text-4xl text-blue-700 font-bold '>ChatMK</h1>
                                            <p className='text-blue-700 pt-2'>(Open AI ChatBot)</p>
                                            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta  provident eaque. Deserunt libero veniam velit ?</p>
                                        </div>
                                        </motion.div>

                                    </div>
                                    <div className='flex z-0 flex-col items-center justify-center mt-10'>
                                        <div className='w-5 h-5 bg-cyan-200 rounded-full absolute -top-1 bottom-0 -left-[4.5px] '></div>
                                        <div className='w-[2px] bg-cyan-200 absolute top-0 bottom-0 left-1 z-0 '></div>
                                        <div className='w-10 h-[2px] bg-cyan-200 rounded-full absolute  bottom-0 -left-3 '></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                 
                </div>
            </section>
        </>
    )
}

export default Project