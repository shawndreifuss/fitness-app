import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const UserContext = createContext();

// Helper function to safely parse JSON from localStorage
const safeParse = (value, defaultValue) => {
  if (value == "undefined") return defaultValue;
  try {
    return JSON.parse(value) || defaultValue;
  } catch (e) {
    console.error("Parsing error on", value);
    return defaultValue;
  }
};

// Initial state that checks for persisted user data in localStorage
const initialState = safeParse(localStorage.getItem('user'), {
  isAuthenticated: false,
  user: null,
});

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
   
    verifyUser();
  }, []); 

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/auth",
    headers: { 'Content-Type': 'application/json' }
  });

  // Interceptor to include the token in every request
  axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    console.log("Token:", token); // For debugging
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Sending request with Authorization header:", config.headers.Authorization); // For debugging
    }
    return config;
  }, error => Promise.reject(error));
  
  const verifyUser = async () => {
    try {
      const response = await axiosInstance.get("/me");
      dispatch({ type: "SET_USER", payload: response.data.user });
    } catch (error) {
      console.error("Error verifying user session:", error);
    }
  };

  const authenticateUser = async (userData, endpoint) => {
    try {
      const response = await axiosInstance.post(`/${endpoint}`, userData);
      console.log("Response from", endpoint, ":", response.data);
      localStorage.setItem('token', response.data.token); // Store new token
      dispatch({ type: "SET_USER", payload: response.data.user });
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error(`Error during ${endpoint}:`, error);
      return { success: false, message: error.response.data.message };
    }
  };

  const login = (email, password) => authenticateUser({ email, password }, 'login');
  const register = (email, password) => authenticateUser({ email, password }, 'register');


  const logout = async () => {
    try {
      await axiosInstance.get("http://localhost:3001/api/auth/logout", {
        withCredentials: true,
      });
      localStorage.removeItem('user');
      dispatch({ type: "LOGOUT" });

    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await axiosInstance.post("/forgot-password", { email });
      console.log("Reset link sent to email.");
      return { success: true, message: "Reset link sent to email." };
    } catch (error) {
      console.error("Error sending reset link:", error);
      return { success: false, message: error.response.data.message };
    }
  };

  const resetPassword = async (password, resetToken) => {
    try {
      const response = await axiosInstance.post(`/reset-password/${resetToken}`, { password });
      // Assuming the API also returns a new authentication token upon password reset
      localStorage.setItem('token', response.data.token);
      dispatch({ type: "SET_USER", payload: response.data.user });
      console.log("Password reset successful.");
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error("Error resetting password:", error);
      return { success: false, message: error.response.data.message };
    }
  };

  const updateSettings = async (settings, userId) => {
    try {
      const response = await axiosInstance.put(`/user-settings/${userId}`, settings);
      // Assuming the API returns the updated user settings
      const updatedUser = { ...state.user, settings: response.data };
      dispatch({ type: "SET_USER", payload: updatedUser });
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Update stored user information
      console.log("User settings updated successfully.");
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error("Error updating user settings:", error);
      return { success: false, message: error.response.data.message };
    }
  };

  return (
    <UserContext.Provider
      value={{ ...state, dispatch, login, logout, register, forgotPassword, resetPassword, updateSettings }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
