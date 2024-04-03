import React from "react";
import {  Typography, Input } from "@material-tailwind/react";


function Hero({ searchTerm, setSearchTerm}) {
 

 const handleChange = (e) => {
     const newSearchTerm = e.target.value;
     setSearchTerm(newSearchTerm);
   
 };
  return (
    <header className="mt-5 bg-white p-8">
      <div className="w-full container mx-auto pt-12 pb-24 text-center">
        <Typography
          color="blue-gray"
          className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
        >
          Find your Workout
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
        >
          Search for your favorite workout and start your journey to a healthier lifestyle.
        </Typography>
        <div className="grid place-items-start justify-center gap-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Input
                label="Search for workouts"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
        </div>
          <div className="flex items-center gap-1">
          </div>
        </div>
      </div>
      <div className="w-full lg:container lg:mx-auto">
      </div>
    </header>
  );
}
export default Hero;
