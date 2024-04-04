import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Workouts from './Workouts';
import SingleWorkout from './SingleWorkout/SingleWorkout';

const Layout = () => {
  return (
   

    <Routes>
        <Route path="/" element={<Workouts/>} />
        <Route path='/:id' element={<SingleWorkout/>} />
        </Routes>
       
  )
}

export default Layout