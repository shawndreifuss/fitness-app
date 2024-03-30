import React, { useState, useEffect } from "react";
import { useUser } from "../../../../context/UserContext";

import InboxIcon from "@mui/icons-material/Inbox";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const notifications = [
  { id: 1, title: "Email Notifications", value: 'email', Icon: InboxIcon, field: "notifications.email", message: "Email notifications changed successfully!" },
  { id: 2, title: "Text Notifications",value: 'sms',  Icon: ChatOutlinedIcon, field: "notifications.sms", message: "Text notifications changed successfully!" },
  { id: 3, title: "Push Notifications",value: 'push',  Icon: NotificationsActiveOutlinedIcon, field: "notifications.push", message: "Push notifications changed successfully!" },
  { id: 4, title: "Reminders", value: 'reminders',  Icon: CampaignOutlinedIcon, field: "notifications.reminders", message: "Reminders changed successfully!" },
];
 const NotificationsCard = () => {

  const { user, updateSettings, getUserSettings } = useUser();
  const userId = user?._id;

   
     // Individual states for each notification type
     const [email, setEmail] = useState(false); // Assuming 'false' as the default
     const [sms, setSms] = useState(false);
     const [push, setPush] = useState(false);
     const [reminders, setReminders] = useState(false);
  const [userSettings, setUserSettings] = useState(null);

  useEffect(() => { 
    if (!userId) return;
    const fetchUserSettings = async () => {
      try {
        const settings = await getUserSettings(userId);
return (
setUserSettings(settings),
setEmail(settings.notifications.email),
setSms(settings.notifications.sms),
setPush(settings.notifications.push),
setReminders(settings.notifications.reminders)
  )

      } catch (error) {
        console.error('Failed to fetch user settings:', error);
      }
    };
    fetchUserSettings();
  }, [userId, getUserSettings]);
  
  const handleToggle = async (field,value) => {
    const newValue = !value; 

    try {
      await updateSettings(newValue, field, user?._id);
      console.log(field, newValue, user?._id);
      await getUserSettings(user?._id); 
      if ( value === "email") setEmail(newValue); 
      setEmail(user?.settings?.notifications?.email);
      if ( value === "sms") setSms(newValue);
      setSms(user?.settings?.notifications?.sms);
      if ( value === "push") setPush(newValue);
      setPush(user?.settings?.notifications?.push);
      if ( value === "reminders") setReminders(newValue);
      setReminders(user?.settings?.notifications?.reminders);
    } catch (error) {
      console.error("Error updating user settings:", error);
    }
  };
  
  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="flow-root">
        <h3 className="text-xl font-semibold dark:text-white">
          Notification Settings
        </h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map(({ id, title, Icon, value, field }) => (
            <li key={id}  className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Icon />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-base font-semibold text-gray-900 truncate dark:text-white">
                    {title}
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                     type="checkbox"
                     checked={value === "email" ? email : value === "sms" ? sms : value === "push" ? push : reminders}
                     onChange={() => handleToggle(field, value === "email" ? email : value === "sms" ? sms : value === "push" ? push : reminders)}
                     className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationsCard;
