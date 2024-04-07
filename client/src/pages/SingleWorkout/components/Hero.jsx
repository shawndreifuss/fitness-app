import formatMonthAndYear from "@/utils/DateFormat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";


function getIntensityColor(intensity) {
  switch (intensity.toLowerCase()) {
    case "easy":
      return "green"; // Example color for 'easy'
    case "medium":
      return "orange"; // Example color for 'medium'
    case "hard":
      return "red"; // Example color for 'hard'
    default:
      return "grey"; // Default color if intensity is not specified
  }
}

function Hero({ workout, user }) {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-col">
          <div className="w-full absolute top-56 center right-0  z-30 py-5 text-center  ">
            <h1 className="mb-4 text-4xl  font-extrabold uppercase tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              {workout?.name}
            </h1>
            <p className="mb-8 text-lg opacity-96 brightness-200  text-white font-bolder  lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Start getting it together learn about Fitness and Nutrition. Get a
              personalized food plan Learn More!
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <button
                href="#"
                className="inline-flex bg-purple-900 justify-center items-center py-3 px-5 text-base hover:border-purple-800 font-medium text-center text-white rounded-lg   focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
              
                Start
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-10 relative top-60  mb-20  dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp xl:-mt-96 relative z-2 mb-[50px] h-[300px] overflow-hidden rounded-[5px] md:h-[400px] lg:h-[500px]"
                data-wow-delay=".1s
              "
              >
                <div className="relative h-full w-full bg-blend-darken ">
                  <div className="absolute w-full h-full bg-gray-900 opacity-50  bg-blend-darken z-1 "></div>
                  <img
                    src="/img/gym.webp"
                    alt="image"
                    className="object-cover object-right-bottom w-screen h-full darken -z-1 bg-blend-darken  "
                  />
                </div>
                <div className="absolute top-0 left-0 flex items-end w-full h-full bg-gradient-to-t from-dark-700 to-transparent">
                  <div className="flex flex-wrap items-center p-4 pb-4 sm:px-8">
                    <div className="flex items-center mb-4 mr-5 md:mr-10">
                      <div className="w-10 h-10 mr-4 overflow-hidden rounded-full">
                        <img
                          src={
                            user?.avatar
                              ? user.avatar
                              : "https://via.placeholder.com/150"
                          }
                          alt="image"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <p className="text-base font-small text-white">
                       
                      <LocalFireDepartmentIcon
     className="w-6 h-6 mr-2"
     style={{ color: workout?.details?.length ? getIntensityColor(workout.details[0].intensity) : 'grey' }}
   />
   {workout?.details?.[0]?.intensity ? workout?.details[0]?.intensity : "None"}
                       
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <p className="flex items-center mr-5 text-sm font-medium text-white md:mr-6">
                        <span className="mr-3">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <path d="M13.9998 2.6499H12.6998V2.0999C12.6998 1.7999 12.4498 1.5249 12.1248 1.5249C11.7998 1.5249 11.5498 1.7749 11.5498 2.0999V2.6499H4.4248V2.0999C4.4248 1.7999 4.1748 1.5249 3.8498 1.5249C3.5248 1.5249 3.2748 1.7749 3.2748 2.0999V2.6499H1.9998C1.1498 2.6499 0.424805 3.3499 0.424805 4.2249V12.9249C0.424805 13.7749 1.1248 14.4999 1.9998 14.4999H13.9998C14.8498 14.4999 15.5748 13.7999 15.5748 12.9249V4.1999C15.5748 3.3499 14.8498 2.6499 13.9998 2.6499ZM1.5748 7.2999H3.6998V9.7749H1.5748V7.2999ZM4.8248 7.2999H7.4498V9.7749H4.8248V7.2999ZM7.4498 10.8999V13.3499H4.8248V10.8999H7.4498V10.8999ZM8.5748 10.8999H11.1998V13.3499H8.5748V10.8999ZM8.5748 9.7749V7.2999H11.1998V9.7749H8.5748ZM12.2998 7.2999H14.4248V9.7749H12.2998V7.2999ZM1.9998 3.7749H3.2998V4.2999C3.2998 4.5999 3.5498 4.8749 3.8748 4.8749C4.1998 4.8749 4.4498 4.6249 4.4498 4.2999V3.7749H11.5998V4.2999C11.5998 4.5999 11.8498 4.8749 12.1748 4.8749C12.4998 4.8749 12.7498 4.6249 12.7498 4.2999V3.7749H13.9998C14.2498 3.7749 14.4498 3.9749 14.4498 4.2249V6.1749H1.5748V4.2249C1.5748 3.9749 1.7498 3.7749 1.9998 3.7749ZM1.5748 12.8999V10.8749H3.6998V13.3249H1.9998C1.7498 13.3499 1.5748 13.1499 1.5748 12.8999ZM13.9998 13.3499H12.2998V10.8999H14.4248V12.9249C14.4498 13.1499 14.2498 13.3499 13.9998 13.3499Z" />
                          </svg>
                        </span>
                        {workout.date
                          ? formatMonthAndYear(workout.date)
                          : "Date"}
                      </p>

                      <p className="flex items-center mr-5 text-sm font-medium text-white md:mr-6">
                        <span className="mr-3">
                          <AccessTimeIcon />
                        </span>
                        {workout?.details?.[0].duration ? workout.details?.[0].duration  : "Time"}{" "}
                        minutes
                      </p>
                      <p className="flex items-center text-sm font-medium text-white">
                        <span className="mr-3">
                          <ThumbUpIcon />
                        </span>
                        {workout?.likes?.length ? workout?.likes?.length : "345"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
