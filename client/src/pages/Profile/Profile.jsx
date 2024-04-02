import React from "react";
import { Routes, Route } from "react-router-dom";
import { useUser } from '../../context/UserContext';

// Components
import ProfilePage from "./components/ProfilePage";
import UserSettings from "./components/UserSettings";

const Profile = () => {

  const { user } = useUser();  
  return (
   <>
   <Routes>
    <Route path="/" element={<ProfilePage user={user}/>} />
    <Route path="/settings" element={<UserSettings user={user} />} />
    </Routes>
   </>
  );
};

export default Profile;
