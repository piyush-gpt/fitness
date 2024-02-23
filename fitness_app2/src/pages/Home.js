import React, { useState } from 'react'
import Homemain from '../components/Home-main'
import Searchexercises from '../components/Searchexercises'
import Exercises from '../components/Exercises'
function Home() {
  const [bodyPart,setBodyPart]=useState('all');
  const [exercises, setExercises]=useState([]);
  const[loading,setLoading]=useState(false);

  return (
    <>
    <Homemain/>
    <Searchexercises setExercises={setExercises} bodyPart={bodyPart}
                setBodyPart={setBodyPart} setloading={setLoading}/>
    <Exercises setExercises={setExercises} bodyPart={bodyPart}
                exercises={exercises} loading={loading} setLoading={setLoading}/>
    </>
  )
}

export default Home