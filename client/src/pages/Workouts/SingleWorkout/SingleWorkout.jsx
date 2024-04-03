import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

const SingleWorkout = () => {
  // const { ...rest } = props;

  const [open, setOpen] = React.useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden ">
      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <div
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              // brandText={currentRoute}
              // secondary={getActiveNavbar(routes)}
              // {...rest}
            />
            <Hero />

            <div>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkout;
