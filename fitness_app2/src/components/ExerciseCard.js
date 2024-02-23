import React from 'react'
import {useNavigate} from 'react-router-dom';
const ExerciseCard = ({exercise}) => {
    const navigate= useNavigate();
    function handleClck(){
        navigate(`/exercise/${exercise.id}` )
    }
  return (
    <>
    
        <div  onClick={handleClck} className=' xs:min-w-320 cursor-pointer bg-white border-y-4 border-solid mb-10 border-red-700  flex flex-col gap-2 hover:scale-110 transition-all duration-200'>
        <img className=' xs:h-64 xs:max-w-none xxs:max-w-xs xxs:h-40' src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <div className='flex gap-3'>
        <button className='ml-[21px]  text-white font-semibold w-fit-content p-3 bg-pink-400 text-xs rounded-2xl uppercase'>
            {exercise.bodyPart}
        </button>
        <button className='ml-[21px] text-white font-semibold w-fit-content p-3 bg-yellow-400 text-xs rounded-2xl uppercase'>
            {exercise.target}
        </button>
        </div>
        <p className='xs:max-w-full overflow-x-auto capitalize font-bold ml-4 mt-[11px] mb-3 xxs:w-60'>{exercise.name}</p>
        </div>
    </>
  )
}

export default ExerciseCard