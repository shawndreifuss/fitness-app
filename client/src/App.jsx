import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// Context Provider 
import { UserProvider } from './context/UserContext';
// Component Imports 
import Navbar from './components/Navbar/Navbar';

// Page Imports
import { Home, Login, Register, Workouts, Nutrition, Shop, About, Profile, Contact } from './pages';
import ForgotPassword from './pages/auth/components/ForgotPassword';


function App() {
  
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <UserProvider>
    {showNavbar && <Navbar />}
     <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/forgot-password/:resetToken" element={<ForgotPassword />} />
      <Route path="/register/*" element={<Register />}/>
      <Route path='/workouts/*' element={<Workouts/>} />
      <Route path='/nutrition/*' element={<Nutrition/>} />
      <Route path='/shop/*' element={<Shop/>} />
      <Route path='/about/*' element={<About/>} />
      <Route path='/Profile/*' element={<Profile/>} />
      <Route path='/contact/*' element={<Contact/>} />
       <Route path="/*" element={<Navigate to="/" replace />} />  
    </Routes>
    </UserProvider>
  );
}

export default App;
