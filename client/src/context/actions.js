import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/user-settings/",
    headers: { "Content-Type": "application/json" },
  });

const updateUserAddress = async (userId, addressData) => {
    console.log("Address data:", addressData);
  try {
    const response = await axiosInstance.put(`${userId}/update-address`, addressData);
    console.log("Address update response:", response.data);
    return { success: true, message: "Address updated successfully", data: response.data };
  } catch (error) {
    console.error("Error updating address:", error.response ? error.response.data : error);
    return { success: false, message: error.response ? error.response.data.message : "An error occurred" };
  }
};


export { updateUserAddress };


