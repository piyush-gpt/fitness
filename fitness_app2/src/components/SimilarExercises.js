import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  console.log(targetMuscleExercises);
  return (
    <>
    <div className='mt-[100px]'>
      <p className='xs:text-3xl  xxs:text-2xl xs:ml-20 xxs:ml-10 mb-10 font-medium capitalize underline text-yellow-100'>
        Exercises that target the <span className=' text-red-500'>same muscle</span> group

      </p>
      <div className='flex p-[20px] ' >
        {targetMuscleExercises.length>0 && 
        <HorizontalScrollBar data={targetMuscleExercises} isBodyParts={false}/>}
    </div>
    </div>
    <div className='mt-[100px]'>
      <p className='text-yellow-100 xs:text-3xl  xxs:text-2xl xs:ml-20 xxs:ml-6 mb-10 font-medium capitalize underline'>
        Exercises that use the <span className=' text-red-500'>same equipment</span>
      </p>
      <div className='flex p-[20px] '>
        {equipmentExercises.length>0 && 
        <HorizontalScrollBar data={equipmentExercises} isBodyParts={false}/>}
    </div>
    </div>
    </>
  )
}

export default SimilarExercises