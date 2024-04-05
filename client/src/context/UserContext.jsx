import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
        login,
        logout,
        register,
        forgotPassword,
        resetPassword,
        updateUserPassword,
        updateSettings,
        getUserSettings,
        updateUserAddress,
} from "@/api/authActions";



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
const initialState = safeParse(localStorage.getItem("user"), {
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



  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
        login,
        logout,
        register,
        forgotPassword,
        resetPassword,
        updateUserPassword,
        updateSettings,
        getUserSettings,
        updateUserAddress,

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

