import React from 'react'
import logo from "../assets/logo/gym-building.png"
export const BodyPart = ({item,bodyPart,setBodyPart}) => {
  function handleClick(){
    setBodyPart(item);
    window.scrollTo({top:1000,left:100,behavior:"smooth"});
  }
  return (
    <div onClick={handleClick} className={` ${bodyPart==item? '  border-t-4 border-solid  border-red-700':""} 
    
    grid items-center justify-center cursor-pointer  bg-white mb-7 xxs:w-[90px] xs:w-[150px] h-[120px]  xs:mx-10`}>
      <img  className=' flex align-center  justify-center xs:w-[90px] h-[80px] ' src={logo} alt='icon' />
      <p className='xs:text-xl xxs:text-md text-center font-bold'>{item} </p>
    </div>
  )
}
