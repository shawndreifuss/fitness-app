import React, {useContext, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// Context Provider 
import { UserProvider } from './context/UserContext';

//  Protected Routes
import { ProtectedRoute, PublicRoute } from './components/Routes/ProtectedRoutes';
// Component Imports 
import Navbar from './components/Navbar/Navbar';

// Page Imports
import { Home, Login, Register, Workouts, Nutrition, Shop, About, Profile, Contact } from './pages';
import ForgotPassword from './pages/auth/components/ForgotPassword';
import Sidebar from './components/Sidebar/Sidebar';
import SingleWorkout from './pages/Workouts/SingleWorkout/SingleWorkout';


function App() {
  
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  

  return (
    <UserProvider >
       <div className="flex h-screen overflow-hidden">

{/* Sidebar */}
<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />

{/* Content area */}
<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

  {/*  Site Navbar */}
  <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />

  <div>
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

     
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route element={<PublicRoute restricted={true} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Other routes when user logs in can no longer access */}
      </Route>
       <Route path="/login/forgot-password/:resetToken" element={<ForgotPassword />} />
      <Route path='/workouts' element={<Workouts />} />
      <Route path='/workouts/:id' element={<SingleWorkout />} />
      <Route path='/nutrition/*' element={<Nutrition/>} />
      <Route path='/store/*' element={<Shop/>} />
      <Route path='/about/*' element={<About/>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile/*" element={<Profile />} />
        {/* ... other protected routes */}
     </Route>
      <Route path='/contact/*' element={<Contact/>} />
       <Route path="/*" element={<Navigate to="/" replace />} />  
    </Routes>

           </div>
           </div>
           </div>
              </div>
    </UserProvider>
  );
}

export default App;
