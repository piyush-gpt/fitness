import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import { fetchData,options,YToptions} from '../utils/fatchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
const ExerciseDetails = () => {
    const [exerciseDetail,setExerciseDetail]=useState({});
    const[exerciseVideos,setExerciseVideos]=useState([]);
    const[targetMuscleExercises,setTargetMuscleExercises]=useState([]);
    const[equipmentExercises,setEquipmentExercises]=useState([]);
    const[loading,setLoading]=useState(false);
 

    const {id}= useParams();

    useEffect(()=>{
        const fetchExerciseData=async()=>{
          setLoading(true);
            const exerciseDBUrl='https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
            const exercisedetailData=await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,options)
            setExerciseDetail(exercisedetailData);
            try{
            const exeerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exercisedetailData.name}`,YToptions);
            setExerciseVideos(exeerciseVideosData.contents);
            }
            catch(e){
              console.log("error aaa gya lol",e);
            }

            const targetMuscleExercisesData= await fetchData(`${exerciseDBUrl}/exercises/target/${exercisedetailData.target}`,options);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData= await fetchData(`${exerciseDBUrl}/exercises/equipment/${exercisedetailData.equipment}`,options);
            setEquipmentExercises(equipmentExercisesData);
            setLoading(false);
        }
        fetchExerciseData();
    },[id])
  return (
    <>
    {loading? <div className=' left-1/2 absolute top-1/2 custom-loader'></div>:
    (<div>
        <Detail exerciseDetail={exerciseDetail}/>
        {exerciseVideos.length==0?<h2>Youtube search api not working sorry</h2>:<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />}
        
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
    )}
    </>
  )
}

export default ExerciseDetails