import React ,{useEffect,useState} from 'react'
import { options,fetchData } from '../utils/fatchData';
import HorizontalScrollBar from './HorizontalScrollBar';
function Searchexercises({bodyPart,setBodyPart,setExercises,setloading}) {
  const [search,setSearch]=useState('');
  const [bodyParts,setBodyParts]=useState([]);
  const [currExercise,setCurrExercise]=useState([]);
  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);
      setBodyParts(['all',...bodyPartsData]);
      setloading(true);
     const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10000',options);
     setCurrExercise(exerciseData);
      setloading(false);  
    }
    fetchExerciseData();
  },[])
  function inp(e){
    setSearch(e.target.value.toLowerCase());
  }
  async function handleSearch(){
    if(search){
      let searchExercise=currExercise.filter((exercise)=>{
        return (exercise.name.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)        
        || exercise.bodyPart.toLowerCase().includes(search)        
        || exercise.target.toLowerCase().includes(search)
        )  
      })  
      setSearch("");
      setExercises(searchExercise);
    }
  }
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-[45px] p-[20px]'>
      <p className='text-4xl font-bold text-center mb-[50px] text-yellow-100'>Awesome Exercises You<br/> Should Know</p>
      <div className="mb-[72px] xs:block xxs:flex flex-col items-center">
    <input onChange={inp} value={search} type="text" id="default-input" placeholder='Search Exercises' className="placeholder:font-thin bg-gray-50 border border-gray-300 font-bold text-xl text-gray-900  rounded-lg  h-[50px] md:w-92 lg:w-[750px] p-3 xxs:w-60 xs:w-70 sm:w-80 "/>
    <button onClick={handleSearch} type="button" className="  focus:outline-none text-white bg-red-500 xs:w-40 xxs:w-32 xxs:h-[50px] rounded-lg hover:bg-red-800 p-3 md:mb-1 md:relative bottom-1 xxs:mt-6 ">Search</button>
      </div>
      <div className='w-full flex items-center justify-center p-[20px]'>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart}
                setBodyPart={setBodyPart} isBodyParts={true}/>
      </div>

    </div>
    </> 
  )
}

export default Searchexercises