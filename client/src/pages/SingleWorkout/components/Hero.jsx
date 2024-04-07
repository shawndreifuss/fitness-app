
import { Link } from "react-router-dom"
import { Button, Typography } from "@material-tailwind/react";
import StoreIcon from '@mui/icons-material/Store';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import formatMonthAndYear from "@/utils/DateFormat";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


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


function Hero({workout, user}) {

  return (
<>
<div
      className="relative z-10 overflow-hidden  dark:bg-dark md:pt-[130px]"
    >
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"
      ></div>
      <div className="container flex justify-center">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-fit ">
            <div className="text-center p-10 px-20 backdrop-blur-sm bg-white/70">
              <h1
                className="mb-4 text-3xl font-bold text-center text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
              >
               {workout.name ? workout.name : "Workout Name"}
              </h1>
              <p className="mb-5 p-2  text-base text-black dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="pb-10  dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp xl:-mt-96 relative z-1 mb-[50px] h-[300px] overflow-hidden rounded-[5px] md:h-[400px] lg:h-[500px]"
              data-wow-delay=".1s
              "
            >
              <img
                src="/imgs/gym.webp"
                alt="image"
                className="object-cover object-center w-screen h-full "
              />
              <div
                className="absolute top-0 left-0 z-10 flex items-end w-full h-full bg-gradient-to-t from-dark-700 to-transparent"
              >
                <div className="flex flex-wrap items-center p-4 pb-4 sm:px-8">
                  <div className="flex items-center mb-4 mr-5 md:mr-10">
                    <div className="w-10 h-10 mr-4 overflow-hidden rounded-full">
                      <img
                        src={user?.avatar ? user.avatar : "https://via.placeholder.com/150"}
                        alt="image"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <p className="text-base font-medium text-white">
                      By
                      <a
                        href="javascript:void(0)"
                        className="text-white hover:opacity-70"
                      >
                        {workout?.coach?.name ? workout.coach : "Coach Name"  }
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <p
                      className="flex items-center mr-5 text-sm font-medium text-white md:mr-6"
                    >
                      <span className="mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M13.9998 2.6499H12.6998V2.0999C12.6998 1.7999 12.4498 1.5249 12.1248 1.5249C11.7998 1.5249 11.5498 1.7749 11.5498 2.0999V2.6499H4.4248V2.0999C4.4248 1.7999 4.1748 1.5249 3.8498 1.5249C3.5248 1.5249 3.2748 1.7749 3.2748 2.0999V2.6499H1.9998C1.1498 2.6499 0.424805 3.3499 0.424805 4.2249V12.9249C0.424805 13.7749 1.1248 14.4999 1.9998 14.4999H13.9998C14.8498 14.4999 15.5748 13.7999 15.5748 12.9249V4.1999C15.5748 3.3499 14.8498 2.6499 13.9998 2.6499ZM1.5748 7.2999H3.6998V9.7749H1.5748V7.2999ZM4.8248 7.2999H7.4498V9.7749H4.8248V7.2999ZM7.4498 10.8999V13.3499H4.8248V10.8999H7.4498V10.8999ZM8.5748 10.8999H11.1998V13.3499H8.5748V10.8999ZM8.5748 9.7749V7.2999H11.1998V9.7749H8.5748ZM12.2998 7.2999H14.4248V9.7749H12.2998V7.2999ZM1.9998 3.7749H3.2998V4.2999C3.2998 4.5999 3.5498 4.8749 3.8748 4.8749C4.1998 4.8749 4.4498 4.6249 4.4498 4.2999V3.7749H11.5998V4.2999C11.5998 4.5999 11.8498 4.8749 12.1748 4.8749C12.4998 4.8749 12.7498 4.6249 12.7498 4.2999V3.7749H13.9998C14.2498 3.7749 14.4498 3.9749 14.4498 4.2249V6.1749H1.5748V4.2249C1.5748 3.9749 1.7498 3.7749 1.9998 3.7749ZM1.5748 12.8999V10.8749H3.6998V13.3249H1.9998C1.7498 13.3499 1.5748 13.1499 1.5748 12.8999ZM13.9998 13.3499H12.2998V10.8999H14.4248V12.9249C14.4498 13.1499 14.2498 13.3499 13.9998 13.3499Z"
                          />
                        </svg>
                      </span>
                     {workout.date ? formatMonthAndYear(workout.date): "Date"}
                    </p>

                    <p
                      className="flex items-center mr-5 text-sm font-medium text-white md:mr-6"
                    >
                      <span className="mr-3">
                    <AccessTimeIcon/> 
                      </span>
                      {workout?.details ? workout?.details.duration : "Time"} minutes
                    </p>
                    <p className="flex items-center text-sm font-medium text-white">
                      <span className="mr-3">
                      < ThumbUpIcon />
                      </span>
                     {workout?.likes?.length ? workout.likes.length : "0"}
                    </p>
                  </div>
                </div>
              </div>
            </div>



            </div></div></div></section>
</> 

  
  );
}

export default Hero;









// <div className="relative min-h-screen w-full">
//     <header className="grid !min-h-[49rem] bg-slate-800 px-8">
//       <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
//         <div className="col-span-1">
//           <Typography variant="h1" color="white" className="mb-4">
//             {workout.name ? workout.name : "Workout Name"}
//           </Typography>
//           <Typography
//             variant="lead"
//             className="mb-7 !text-white md:pr-16 xl:pr-28"
//           >
//             "Maximize your workout with essential supplements and premium gear. Elevate performance, enhance recovery, and achieve your health goals. Shop now for a transformative health and fitness journey!"
//           </Typography>
          
//           <div className="flex  sm:my-10 gap-3 md:mb-2 md:w-10/12 md:flex-row">
//             <Link to="/store">
//             <Button
//               size="lg"
//               color="white"
//               className="flex justify-center items-center gap-3"
//             >
//               <FitnessCenterIcon
//                 className="w-6 h-6"
//               />
//               More Workouts
//             </Button>
//             </Link>
//             <Link to="/store">
//             <Button
//               size="lg"
//               color="white"
//               className="flex justify-center items-center gap-3"
//             >
//               <StoreIcon
                
//                 className="w-6 h-6"
//               />
//               Go to Store
//             </Button>
//             </Link>
//           </div>
//         </div>
//         <img
          
//           src={workout.images ? workout?.images[0].toString() : "https://via.placeholder.com/150"}
//           alt="team work"
//           className="col-span-1  my-24 w-full rounded-xl h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] max-h-[20rem] lg:my-0 lg:ml-auto lg:max-h-[40rem]   lg:translate-y-0"
//         />
//       </div>
//     </header>
//     <div className="mx-8 lg:absolute z-10 lg:w-[90%] lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md  ">
//       <div >
//         <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
//         <Typography
//           variant="paragraph"
//           className="mt-2 lg:mt-5 "
//         >
//             <ConstructionIcon className="w-6 h-6 mr-2" />
//           Equipment: <span className="uppercase font-bold font-xxl">{workout?.equipment ? workout.equipment : "None"}</span>
//         </Typography>
//         <Typography variant="paragraph" className="mt-2 lg:mt-5">
//   <LocalFireDepartmentIcon
//     className="w-6 h-6 mr-2"
//     style={{ color: workout?.details?.length ? getIntensityColor(workout.details[0].intensity) : 'grey' }}
//   />
//   Intensity: <span className="uppercase font-bold font-xxl">
//     {workout?.details?.[0]?.intensity ? workout.details[0].intensity : "None"}
//   </span>
// </Typography>
// {workout?.details?.[0] && (
//   <Typography variant="paragraph" className="mt-5">
//     <SwapVertIcon className="w-6 h-6 mr-2" />
//     Sets: <span className="uppercase font-bold font-xxl">{workout.details[0].sets || "None"}</span>
//   </Typography>
// )}
// {workout?.details?.[0] && (
//   <Typography variant="paragraph" className="mt-5">
//     <RepeatIcon className="w-6 h-6 mr-2" />
//     Reps: <span className="uppercase font-bold font-xxl">{workout.details[0].reps || "None"}</span>
//   </Typography>
// )}
//         </div>
//       </div>
      
//     </div>
//   </div>