import React, { useContext, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// Context Provider
import { UserProvider } from "./context/UserContext";
import { useUser } from "@/context";
  
//  Protected Routes
import { ProtectedRoute } from "./context/ProtectedRoutes";
// Component Imports
import Navbar from "./components/Navbar/Navbar";

// Auth Imports
import { Auth , Workout} from "@/layouts";

// Page Imports
import {
  Home,
  Nutrition,
  Shop,
  About,
  Profile,
  Contact,
} from "./pages";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showNavbar = !location.pathname.startsWith("/auth");

  
  return (
    <UserProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        {showNavbar && (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}

        {/* Content Area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {showNavbar && (
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          )}

          {/* Main Content */}
          <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<Home />} />

              {/* Public Routes */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/store/*" element={<Shop />} />
              <Route path="/about/*" element={<About />} />

              {/* Auth Routes */}
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/workouts/*" element={<Workout />} />
              <Route path="/nutrition/*" element={<Nutrition />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/profile/*" element={<Profile />} />
              </Route>

              {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
