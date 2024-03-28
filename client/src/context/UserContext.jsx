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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verifyUser();
  }, []); 
  


  const verifyUser = async () => {
    
    if (localStorage.getItem('user') === undefined || !localStorage.getItem('user')) return;
    try {
      const response = await axios.get("http://localhost:3001/api/auth/me", {
        withCredentials: true,
      });
      dispatch({ type: "SET_USER", payload: response.data.user });
      setCurrentUser(response.data.user);
    } catch (error) {
      console.error("Error verifying user session:", error);
      // Optionally, handle the case where the user is not authenticated.
    }
  };

  const register = async (email, password) => {
    if (state.isAuthenticated) return { success: true, user: state.user };
    let user = null;
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        { email, password },
        { withCredentials: true }
      );       
      
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error("Error logging in:", error);

     return { message: "User Exists! Please login!"}
     
    }
  };

  const login = async (email, password) => {
    if (state.isAuthenticated) return { success: true, user: state.user };
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        { email, password },
        { withCredentials: true }
      );       
      
      if (response.data.success) {
       localStorage.setItem('user', JSON.stringify(response.data.user));
        return { success: true, user: response.data.user};
      } else {
        return { success: false, message: "Invalid Credentials! Please try again!"};
      }
      
    } catch (error) {
      localStorage.removeItem('user');
      console.error("Error logging in:", error);
      // Optionally, handle login error, e.g., by setting an error state or displaying a message to the user.
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:3001/api/auth/logout", {
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
      const response = await axios.post(
        "http://localhost:3001/api/auth/forgot-password",
        { email }
      );
      return { success: true};
    } catch (error) {
      console.error("Error sending reset link:", error);
    }
  };

  const resetPassword = async (password, resetToken) => {

    try {
      const response = await axios.post(
        `http://localhost:3001/api/auth/login/forgot-password/${resetToken}`,
        { password }
      );
       const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, user: user};
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  }

  return (
    <UserContext.Provider
      value={{ ...state, dispatch, login, logout, register, forgotPassword, resetPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
