import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../../context/UserContext";

const AddressCard = ({ user }) => {

    const userId = user?.user?._id;

    const { updateUserAddress, getUserSettings} = useUser();
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState({
        street: user.street || '',
        city: user.city || '',
        state: user.state || '',
        zip: user.zip || '',
        country: user.country || '',
    });


    useEffect(() => {
        if (!userId) return;
        const fetchUserSettings = async () => {
            try {
                const settings = await getUserSettings(userId);
                setAddress({
                    street: settings.shippingAddress.street,
                    city: settings.shippingAddress.city,
                    state: settings.shippingAddress.state,
                    zip: settings.shippingAddress.zip,  
                    country: settings.shippingAddress.country,
                });
            } catch (error) {
                console.error("Failed to fetch user settings:", error);
            }
        };
        fetchUserSettings();
    }, [userId, getUserSettings]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({ ...prev, [name]: value }));
    };


    const toggleEdit = () => setIsEditing(!isEditing);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isEditing) {
            toggleEdit();
            return;
        }
        const response = await updateUserAddress(user?.user?._id, address);
        if (response.success) {
            alert(response.message);
            toggleEdit(); 
        } else {
            alert(response.message);
        }
    };

    return (
        <div className="col-span-2">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold dark:text-white">Shipping Address</h3>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        {/* Dynamically create form fields for each address property */}
                        {Object.entries(address).map(([key, value]) => (
                            <div key={key} className="col-span-6 sm:col-span-3">
                                <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                <input
                                    disabled={!isEditing}
                                    type="text"
                                    name={key}
                                    id={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required={isEditing}
                                />
                            </div>
                        ))}
                        <div className="col-span-6 sm:col-full">
                            <button type="submit" className="text-white bg-purple-700 hover:bg-primary-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                                {isEditing ? "Save" : "Edit"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressCard;