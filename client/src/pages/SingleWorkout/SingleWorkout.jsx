import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { useUser } from '@/context'
import { findWorkoutById } from "@/api/workoutActions";
import { useParams } from "react-router-dom";
import Instructions from "./components/Instructions";

const SingleWorkout = () => {
  const { id } = useParams()
  const { user } = useUser()

  const [workout, setWorkout] = useState({})

useEffect(() => {
  findWorkoutById(id)
  .then(res => {
    setWorkout(res.data)
  })
  console.log(workout)
  
}
, [id])

  return (
    <>
    

            <Hero user={user} workout={workout}/>
            <Instructions workout={workout}/>

            </>

            
          
  );
};

export default SingleWorkout;
