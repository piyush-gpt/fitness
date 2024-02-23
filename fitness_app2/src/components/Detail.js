import React from 'react'
import BodyPartImage from "../assets/logo/BodyPart.png"
import EquipmentImage from "../assets/logo/Equipment.png"
import MuscleGroupImage from "../assets/logo/MuscleGroup.png"
const Detail = ({exerciseDetail}) => {
    const {bodyPart, name, target, gifUrl,equipment}= exerciseDetail;
    const extraDetail=[
        {
            icon:BodyPartImage,
            name:bodyPart
        },
        {
            icon:MuscleGroupImage,
            name:target
        },
        {
            icon:EquipmentImage,
            name:equipment
        }
    ]
  return (
    <div className='flex sm:flex-row flex-col  sm:items-start items-center p-[20px] mt-4 gap-10'>
        <img className='w-1/2 shadow-xl hover:scale-110 transition-all duration-200' src={gifUrl} alt={name} loading='lazy'/>
        <div className='flex flex-col ml-10 gap-12 justify-start  items-center'>
            <p className=' md:text-5xl xxs:text-2xl capitalize font-bold text-yellow-100'>
                {name}
            </p>
            <p className=' md:text-xl xxs:text-sm text-yellow-100'>
                Exercises keep you strong.<br/><span className=' text-red-500'>{name}</span> is one of the best
                exercises to target your <span className=' text-red-500'>{target}</span>. <br/>It will help you improve your mood
                and gain energy.
            </p>
            <div className='w-full flex flex-col items-start gap-16 '>
            {extraDetail.map((obj)=>(
                <div className='flex justify-center items-center gap-6'>
                    <button>
                        <img className="w-12 rounded-full bg-red-400 p-2" src={obj.icon} alt={obj.name}/>
                    </button>
                    <p className=' capitalize  font-medium text-xl text-yellow-100'>
                        {obj.name}
                    </p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Detail