import React from 'react'

const TitleText = () => {
  return (
    <div className='p-20'>
        <h1 className='text-4xl font-serif text-white font-bold'>I am <span className='text-4xl  font-serif text-indigo-400'>Mukesh Kumar</span></h1>
        <h1 className='font-bold text-white text-[2.6vw]'> FULL-STACK DEVELOPER</h1>
        <button className='font-sans px-4 py-2 mt-4 hover:bg-cyan-400  bg-cyan-600 rounded-xl font-bold text-white text-[17px]'>About me</button>
    </div>
  )
}

export default TitleText