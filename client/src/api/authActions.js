const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/auth",
    headers: { "Content-Type": "application/json" },
  });

  // Interceptor to include the token in every request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


export const verifyUser = async () => {
    if (!localStorage.getItem("token")) return;
    try {
      const response = await axiosInstance.get("/me");
      dispatch({ type: "SET_USER", payload: response.data.user });
    } catch (error) {
      console.error("Error verifying user session:", error);
    }
  };

  export const authenticateUser = async (userData, endpoint) => {
    try {
      const response = await axiosInstance.post(`/${endpoint}`, userData);
      localStorage.setItem("token", response.data.token); // Store new token
      dispatch({ type: "SET_USER", payload: response.data.user });
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error(`Error during ${endpoint}:`, error);
      return { success: false, message: error.response.data.message };
    }
  };

  export const login = (email, password) =>
    authenticateUser({ email, password }, "login");
  const register = (email, password) =>
    authenticateUser({ email, password }, "register");

  const logout = async () => {
    try {
      await axiosInstance.get("http://localhost:3001/api/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  export const updateUserPassword = async (currentPassword, newPassword, userId) => {
    try {
      await axiosInstance.patch(`/${userId}/update-password`, {
        currentPassword,
        newPassword,
        userId,
      });
      return { success: true, message: "Password updated successfully.", user: state.user};
    } catch (error) {
      console.error("Error updating password:", error);
      return { success: false, message: error.response.data.message };
    }
  };

  export const forgotPassword = async (email) => {
    try {
      await axiosInstance.post("/forgot-password", { email });
      console.log("Reset link sent to email.");
      return { success: true, message: "Reset link sent to email." };
    } catch (error) {
      console.error("Error sending reset link:", error);
      return { success: false, message: error.response.data.message };
    }
  };

  export const resetPassword = async (password, resetToken) => {
    try {
      const response = await axiosInstance.post(
        `/reset-password/${resetToken}`,
        { password }
      );
      // Assuming the API also returns a new authentication token upon password reset
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "SET_USER", payload: response.data.user });
      console.log("Password reset successful.");
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error("Error resetting password:", error);
      return { success: false, message: error.response.data.message };
    }
  };

  export const getUserSettings = async (userId) => {
    try {
      const response = await axios({
        url: `http://localhost:3001/api/auth/user-settings/${userId}`})
      return response.data
    } catch (error) {
      console.error("Error retrieving user settings:", error);
      return null;
    }
  };

  export const updateSettings = async (value, field, userId) => {
    const settingsUpdate = {
      value,field, // Correctly use computed property names
    };
    try {
      const response = await axiosInstance.put(
        `/user-settings/${userId}/update-settings`,
        settingsUpdate , // Pass the payload to the API
      );
      if (response.data) {
        const updatedUser = { ...state.user, settings: response.data.settings };
  
        dispatch({ type: "SET_USER", payload: updatedUser });
        localStorage.setItem("user", JSON.stringify(updatedUser)); // Update localStorage with new user data
  
        return { success: true, user: updatedUser };
      } else {
        // Handle case where success is false but no error was thrown
        console.error("Update unsuccessful:", response.data.message);
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error("Error updating user settings:", error);
      // Assuming error.response.data contains a standardized error message
      return { success: false, message: error.response?.data?.message || "An error occurred" };
    }
  };

 export const updateUserAddress = async (userId, addressData) => {
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

export { login, register, logout, updateUserPassword, forgotPassword, resetPassword, getUserSettings, updateSettings, updateUserAddress}