import React, { useState } from "react";

import formatMonthAndYear from "../../../../utils/DateFormat";
import { searchWorkouts } from "../../../../context/workoutActions";
import { Link } from "react-router-dom";
import { LikeButton } from "../../../../components/Buttons/LikeButton";
import ThumbDownOffAltTwoToneIcon from '@mui/icons-material/ThumbDownOffAltTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

// Categories and difficulties arrays remain the same
const categories = [
  { label: "All", value: "all" },
  { label: "Legs", value: "legs" },
  { label: "Arms", value: "arms" },
  { label: "Chest", value: "chest" },
  { label: "Back", value: "back" },
  { label: "Shoulders", value: "shoulders" },
  { label: "Abs", value: "abs" },
  { label: "Cardio", value: "cardio" },
  // Add more categories as needed
];


export function WorkoutCard( {workout}) {
  
const [isFavorite, setIsFavorite] = useState(false);

  return (
    
         
              <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-noneflex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}"
              >
                <div className="h-full w-full">
                  <div className="relative w-full">
                    <img
                      src={workout?.images[0].toString()}
                      className="mb-3 h-full min-h-64 max-h-64 w-full   3xl:h-full 3xl:w-full"
                      alt="hello"
                    />
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="absolute top-3 right-3 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-xl 
                      p-2 text-brand-500 hover:cursor-pointer"
                    >
                      <div className="flex h-full w-full items-center justify-center  text-xl hover:bg-gray-50 dark:text-navy-900">
                        <LikeButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
                      </div>
                    </button>
                  </div>
          
                  <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
                    <div className="mb-2">
                      <p className="text-lg font-bold text-navy-700 dark:text-white">
                        {" "}
                        {workout?.name}{" "}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                        {/*  TODO: ADD Coach  By {workout?.coach}{" "} */}
                      </p>
                    </div>
          
                    <div className="flex flex-row-reverse gap-5 md:mt-2 lg:mt-0">
                      <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800">
                        <ThumbDownOffAltTwoToneIcon />65
                      </span>
                      <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800">
                        <ThumbUpTwoToneIcon />65
                      </span>
                      
                      {/* {bidders.map((avt, key) => (
                        <span
                          key={key}
                          className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800"
                        >
                          <img
                            className="h-full w-full rounded-full object-cover"
                            src={avt}
                            alt=""
                          />
                        </span>
                      ))} */}
                    </div>
                  </div>
          <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
                       +5 {workout?.completed?.length}
                      </span>
                  <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
                    <div className="flex">
                      <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
                        Current Bid: price <span>ETH</span>
                      </p>
                    </div>
                    <Link to={`/workouts/${workout._id}`}>
                    <button
                      
                      className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                    >
                      View
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
    
  );
}

export default WorkoutCard;

