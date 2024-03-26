import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// Component Imports 
import Navbar from './components/Navbar/Navbar';

// Page Imports
import { Home, Login, Register, Workouts, Nutrition, Shop, About, Profile, Contact } from './pages';


function App() {
  
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <>
    {showNavbar && <Navbar />}
     <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />}/>
      <Route path='/workouts/*' element={<Workouts/>} />
      <Route path='/nutrition/*' element={<Nutrition/>} />
      <Route path='/shop/*' element={<Shop/>} />
      <Route path='/about/*' element={<About/>} />
      <Route path='/Profile/*' element={<Profile/>} />
      <Route path='/contact/*' element={<Contact/>} />
       <Route path="/*" element={<Navigate to="/" replace />} />  
    </Routes>
   
    </>
  );
}

export default App;
