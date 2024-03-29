import React, { useState, useEffect } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { useUser} from '../../../../context/UserContext';

const NotificationsCard = ({ user }) => {

  const currentUser = user.user;
  

  // Use the updateSettings function from context
  const { updateSettings } = useUser();
  
  // Initialize the toggle state for each notification type
  const [toggles, setToggles] = useState({
    1: currentUser?.notifications?.email || false,
    2: currentUser?.notifications?.text || false,
    3: currentUser?.notifications?.push || false,
    4: currentUser?.notifications?.reminders || false,
  });

  // Function to handle the toggle action for a specific notification
  const handleToggle = (id, value, field) => {
   const userId = user.user._id;
    updateSettings(field,value, userId )
    setToggles((prevToggles) => ({
      ...prevToggles,
      
      [id]: !prevToggles[id],
    }));
  };

  // Update the user settings when a toggle is changed
  // useEffect(() => {
  //   const updatedSettings = {
  //     notifications: {
  //       email: toggles[1],
  //       text: toggles[2],
  //       push: toggles[3],
  //       reminders: toggles[4],
  //     },
  //   };
  //   updateSettings(updatedSettings);
  // }, [toggles]);

  const notifications = [
    {
      id: 1,
      title: "Email Notifications",
      Icon: InboxIcon,
      field: "notifications.email",
      checked: currentUser?.notifications?.email || false,
      message: "Email notifications changed successfully!",
    },
    {
      id: 2,
      title: "Text Notifications",
      Icon: ChatOutlinedIcon,
      field: "notifications.text",
      checked: currentUser?.notifications?.text || false,
      message: "Text notifications changed successfully!",
    },
    {
      id: 3,
      title: "Push Notifications",
      Icon: NotificationsActiveOutlinedIcon,
      field: "notifications.push",
      checked: currentUser?.notifications?.push || false,
      message: "Push notifications changed successfully!",
    },
    {
      id: 4,
      title: "Reminders",
      Icon: CampaignOutlinedIcon,
      field: "notifications.reminders",
      checked: currentUser?.notifications?.reminders || false,
      message: "Reminders changed successfully!",
    },
  ];

  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="flow-root">
        <h3 className="text-xl font-semibold dark:text-white">
          Notification Settings
        </h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map(({ id, title, Icon, field }) => (
            <li key={id} value={field} className="py-4">
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
                      checked={toggles[id]}
                      onChange={() => handleToggle(id, field, !toggles[id])}
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
