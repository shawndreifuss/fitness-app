import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Workouts, SingleWorkout } from '@/pages'


const Workout = () => {
  return (
    <Routes>
<Route path="/" element={<Workouts />} />
<Route path="/:id" element={<SingleWorkout />} />

    </Routes>
  )
}

export default Workout