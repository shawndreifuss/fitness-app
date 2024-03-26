import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const UserContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
};

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

  const verifyUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/auth/me", {
        withCredentials: true,
      });
      dispatch({ type: "SET_USER", payload: response.data.user });
    } catch (error) {
      console.error("Error verifying user session:", error);
      // Optionally, handle the case where the user is not authenticated.
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        { email, password }
      );
      dispatch({ type: "SET_USER", payload: response.data.user }); // Assuming the API returns the user object upon registration
    } catch (error) {
      console.error("Error registering:", error);
      // Capture and dispatch registration error
      dispatch({ type: "SET_ERROR", payload: error.response?.data?.message || "Registration failed." });
    }
  };

  const login = async (email, password) => {
    try {
      await axios.post(
        "http://localhost:3001/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      verifyUser(); // Verify user after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      // Optionally, handle login error, e.g., by setting an error state or displaying a message to the user.
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:3001/api/auth/logout", {
        withCredentials: true,
      });
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/forgot-password",
        { email }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error sending reset link:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ ...state, dispatch, login, logout, register, forgotPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
