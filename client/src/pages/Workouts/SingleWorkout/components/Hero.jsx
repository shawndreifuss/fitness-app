
import { Link } from "react-router-dom"
import { Button, Typography } from "@material-tailwind/react";
import StoreIcon from '@mui/icons-material/Store';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SwapVertIcon from '@mui/icons-material/SwapVert';

function getIntensityColor(intensity) {
    switch (intensity.toLowerCase()) {
      case 'easy':
        return 'green'; // Example color for 'easy'
      case 'medium':
        return 'orange'; // Example color for 'medium'
      case 'hard':
        return 'red'; // Example color for 'hard'
      default:
        return 'grey'; // Default color if intensity is not specified
    }
  }


function Hero({workout}) {

  return (
    <div className="relative min-h-screen w-full">
    <header className="grid !min-h-[49rem] bg-slate-800 px-8">
      <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h1" color="white" className="mb-4">
            {workout.name ? workout.name : "Workout Name"}
          </Typography>
          <Typography
            variant="lead"
            className="mb-7 !text-white md:pr-16 xl:pr-28"
          >
            "Maximize your workout with essential supplements and premium gear. Elevate performance, enhance recovery, and achieve your health goals. Shop now for a transformative health and fitness journey!"
          </Typography>
          
          <div className="flex  sm:my-10 gap-3 md:mb-2 md:w-10/12 md:flex-row">
            <Link to="/store">
            <Button
              size="lg"
              color="white"
              className="flex justify-center items-center gap-3"
            >
              <FitnessCenterIcon
                className="w-6 h-6"
              />
              More Workouts
            </Button>
            </Link>
            <Link to="/store">
            <Button
              size="lg"
              color="white"
              className="flex justify-center items-center gap-3"
            >
              <StoreIcon
                
                className="w-6 h-6"
              />
              Go to Store
            </Button>
            </Link>
          </div>
        </div>
        <img
          
          src={workout.images ? workout?.images[0].toString() : "https://via.placeholder.com/150"}
          alt="team work"
          className="col-span-1  my-24 w-full rounded-xl h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] max-h-[20rem] lg:my-0 lg:ml-auto lg:max-h-[40rem]   lg:translate-y-0"
        />
      </div>
    </header>
    <div className="mx-8 lg:absolute z-10 lg:w-[90%] lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md  ">
      <div >
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
        <Typography
          variant="paragraph"
          className="mt-2 lg:mt-5 "
        >
            <ConstructionIcon className="w-6 h-6 mr-2" />
          Equipment: <span className="uppercase font-bold font-xxl">{workout?.equipment ? workout.equipment : "None"}</span>
        </Typography>
        <Typography variant="paragraph" className="mt-2 lg:mt-5">
  <LocalFireDepartmentIcon
    className="w-6 h-6 mr-2"
    style={{ color: workout?.details?.length ? getIntensityColor(workout.details[0].intensity) : 'grey' }}
  />
  Intensity: <span className="uppercase font-bold font-xxl">
    {workout?.details?.[0]?.intensity ? workout.details[0].intensity : "None"}
  </span>
</Typography>
{workout?.details?.[0] && (
  <Typography variant="paragraph" className="mt-5">
    <SwapVertIcon className="w-6 h-6 mr-2" />
    Sets: <span className="uppercase font-bold font-xxl">{workout.details[0].sets || "None"}</span>
  </Typography>
)}
{workout?.details?.[0] && (
  <Typography variant="paragraph" className="mt-5">
    <RepeatIcon className="w-6 h-6 mr-2" />
    Reps: <span className="uppercase font-bold font-xxl">{workout.details[0].reps || "None"}</span>
  </Typography>
)}
        </div>
      </div>
      
    </div>
  </div>
  );
}

export default Hero;









