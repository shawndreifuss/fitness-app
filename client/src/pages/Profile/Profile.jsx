import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useUser } from '../../context/UserContext';
import { Avatar, Card, CardBody, Typography, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

// Components
import ProfilePage from "./components/ProfilePage";
import UserSettings from "./components/UserSettings";

const Profile = () => {

  const { user } = useUser();
  const [activeTab, setActiveTab] = useState(localStorage.getItem('profile-tab') ||'profile');

  // Components map
  const tabComponents = {
    profile: <ProfilePage user={user} />,
    myWorkouts: <div>Fitness Stats Component</div>, // Replace with actual component
    settings: <UserSettings user={user} />,
  };
const setTab = (tab) => {
  setActiveTab(tab);
    localStorage.setItem('profile-tab', tab);
}
 
  return (
   <>
   <div className="relative  h-72 w-full overflow-hidden rounded-xl bg-[url('/imgs/bg-hero.webp')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
   <Card className="mx-3 -mt-40 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={user?.avatar || "https://cdn.tuk.dev/assets/templates/olympus/projects-1.jpg"}
                alt=""
                size="xl"
                variant="rounded"
                className="rounded-lg max-h-40 max-w-32 w-32 h-32 shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {user?.username || "no name"}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {user?.email || "no email"}
                </Typography>
              </div>
            </div>
            <div className="w-96">
               <Tabs value={activeTab} onChange={setActiveTab}>
                <TabsHeader>
                  <Tab value="profile" onClick={()=>setTab("profile")}>
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Profile
                  </Tab>
                  <Tab value="fitness" onClick={()=>setTab("myWorkouts")}>
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                  Workouts
                  </Tab>
                  <Tab value="settings" onClick={()=>setTab("settings")}>
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div> 
          {tabComponents[activeTab]}
          </CardBody>
          </Card>


    
   </>
  );
};

export default Profile;
