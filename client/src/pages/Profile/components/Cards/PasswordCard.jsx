import React, { useState } from 'react';
import { useUser } from '../../../../context/UserContext';    

const PasswordCard = ({user}) => {

    const { updateUserPassword } = useUser();

const currentUser = user.user;
  
const [passwordFields, setPasswordFields] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
});

  
  const [isEditing, setIsEditing] = useState(false);
  const [disabled, setDisabled] = useState(true);


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordFields((prevFields) => ({
        ...prevFields,
        [name]: value
    }));
};

const handleEditClick = async (e) => {
    e.preventDefault();
    if (isEditing) {
        if (passwordFields.newPassword !== passwordFields.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        await updateUserPassword(passwordFields.currentPassword, passwordFields.newPassword, currentUser?._id);
        setPasswordFields({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }
    setIsEditing(!isEditing);
};

  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <h3 className="mb-4 text-xl font-semibold dark:text-white">Password information</h3>
    <form onSubmit={handleEditClick}>
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
                <input
                    disabled={!isEditing}
                    type="password"
                    name="currentPassword"
                    id="current-password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="••••••••"
                    value={passwordFields.currentPassword}
                    onChange={handleInputChange}
                    autoComplete='current-password'
                    required
                />
            </div>
 {/* New Password */}
 <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input
                            disabled={!isEditing}
                            type="password"
                            name="newPassword"
                            id="new-password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="••••••••"
                            value={passwordFields.newPassword}
                            onChange={handleInputChange}
                            required={isEditing}
                            autoComplete='new-password'
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
                        <input
                            disabled={!isEditing}
                            type="password"
                            name="confirmPassword"
                            id="confirm-password"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="••••••••"
                            value={passwordFields.confirmPassword}
                            onChange={handleInputChange}
                            required={isEditing}
                            autoComplete='new-password'
                        />
                    </div>
          {/* Edit/Save Button */}
          <div className="col-span-6 sm:col-full">
                        <button type="submit" className="text-white bg-purple-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordCard;
