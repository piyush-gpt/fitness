import React from 'react'
import { BodyPart } from './BodyPart'
import ExerciseCard from './ExerciseCard'
const HorizontalScrollBar = ({data,bodyPart,setBodyPart, isBodyParts}) => {
  return (
    <div className=' overflow-x-scroll items-center xs:justify-between flex w-full gap-10  scrollbar-thumb-gray-900 scrollbar-thin scrollbar-track-red-300'>
      {data.map((item,index)=>(
        <div >
         { isBodyParts? <BodyPart key={index} item={item} bodyPart={bodyPart}
                setBodyPart={setBodyPart}/>
                : <ExerciseCard exercise={item} key={index} />
      }
          </div>
      ))}
    </div>
  )
}

export default HorizontalScrollBar