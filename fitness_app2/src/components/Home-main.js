import React from 'react'
import img from '../assets/images/main-img.png'
function Homemain() {
  return (
    <>
    <div className='flex flex-wrap w-screen xs:justify-between xs:flex-row xxs:flex-col  xxs:items-center'>
    <div className=' xs:mt-[130px] mt-10 xl:ml-[80px] p-2 m-2 '>
        <h1 className=' xxs:text-2xl xs:text-3xl sm:text-4xl p-2 m-2 font-bold text-red-500'>Fitness Club</h1>
        <h2 className=' xs:text-2xl sm:text-3xl md:text-4xl text-3xl p-2 m-2 text-yellow-100'>Sweet, Smile <br/>And Repeat</h2>
        <p className='md:text-xl xxs:w-40 xs:w-50 md:w-90 lg:w-96 p-2 m-2 text-yellow-100'>Check out the most effective exercises personalized to you</p>
        <a href='#exercises' className=" mt-4 focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  p-3 m-2">Explore Exercises</a>
        <h2 className='xl:block hidden text-9xl font-semibold  text-pink-200 opacity-100 '>Exercise</h2>
    </div>
    <div className='mt-7'>
    <img className='xs:block hidden xs:w-[265px] :w-[600px] lg:w-[530px] sm:w-[300px] md:w-[450px]' src={img} alt="banner"/>
    </div>
    </div>
    </>

  )
}

export default Homemain