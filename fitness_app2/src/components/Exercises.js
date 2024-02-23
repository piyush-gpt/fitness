import React, { useEffect, useState } from 'react'
import {options,fetchData } from "../utils/fatchData.js"
import ExerciseCard from './ExerciseCard.js'
import { Pagination } from '@mui/material'
import '../css/loader.css'
const Exercises = ({exercises,setExercises,bodyPart,loading,setLoading}) => {
  const[currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=9;
  

  const indexOfLastExercise=currentPage * exercisesPerPage;
  const indexOfFirstExercise= indexOfLastExercise-exercisesPerPage;
  const currentExercises= exercises.slice(indexOfFirstExercise,indexOfLastExercise);
  function paginate(e,value){
    setCurrentPage(value);
    window.scrollTo({top:1000 ,behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExerciseData =async()=>{
      let exerciseData=[];
      if(bodyPart==='all'){
        setLoading(true);
        exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10000',options);
      }
      else{
        setLoading(true);
        exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,options);
      }
      setExercises(exerciseData);
      setLoading(false);
    }
    fetchExerciseData();
  },[bodyPart])
  return (
    
    <div className='mt-[30px] p-[20px] mb-[46px]' id='exercises'>
      <p className=' ml-12 underline xs:text-5xl xxs:text-3xl font-semibold text-yellow-100' >
        {(loading||exercises.length>0)? "Showing Results":"No Resut Found" }
      </p>
      {loading?<div className='  mx-auto mt-20 custom-loader'></div>:
      (<>
      <div className='flex gap-28 gap-y-10 flex-wrap justify-center mt-12 '>
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </div>
      <div className='mt-[100px] items-center justify-center flex '>
        {exercises.length>9 && (
          <Pagination
          color="standard"
          shape="rounded"
          count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          className=" bg-yellow-100"
          />
        )}
      </div>
      </>)}
    </div> 
  )
}

export default Exercises
