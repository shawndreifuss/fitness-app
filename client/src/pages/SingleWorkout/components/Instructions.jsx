import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  CardFooter,
  Input,
  
} from "@material-tailwind/react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { LatestGear } from "./LatestGear";

const Instructions = ({ workout }) => {
  console.log(workout);
  return (
    <div className="md:grid xl:grid lg:grid-cols-7 md:grid-cols-2 xl:grid-cols-10 sm:grid-cols-1 w-full mr-5">
      <div className="w-full flex flex-wrap justify-center lg:-mt-12 md:col-span-2 lg:col-span-5 xl:col-span-7">
        <div className="rounded-xl bg-white p-5 ">
          <div className=" flex flex-wrap items-center">
            <div className="-mt-8 w-full sm:w-screen sm:flex sm:flex-col px-4 md:w-7/12 lg:w-7/12">
              <div className="flex  gap-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                  <LocalLibraryIcon className="h-10 w-10 text-white " />
                </div>
                <Typography variant="h1" className="mb-5 underline">
                  Breaking it Down{" "}
                </Typography>
              </div>
              <ol>
                <li>
                  <strong>
                    1. Stand with your feet shoulder-width apart or slightly
                    wider{" "}
                  </strong>{" "}
                  Extend your arms straight out in front of you to help maintain
                  balance.
                </li>{" "}
                <li>
                  {" "}
                  <strong> 2. Initiate the Movemen: </strong> Begin by taking a
                  deep breath in bracing your core, and then start to push your
                  hips back as if you're trying to sit in a chair. Ensure your
                  knees don’t go beyond your toes to maintain proper alignment.
                </li>{" "}
                <li>
                  {" "}
                  <strong>3. Lower your body down as far as you can</strong> by
                  bending your knees while keeping your upper body as upright as
                  possible. Think about keeping your chest up and shoulders
                  back. Your weight should be on your heels.
                </li>{" "}
                <strong>4. The Lowest Point:</strong>{" "}
                <li>
                  Aim to get your thighs parallel to the ground, but depth will
                  depend on your mobility and flexibility. Make sure your knees
                  are in line with your feet and not caving inward.
                </li>{" "}
                <strong>5. Ascending:</strong>{" "}
                <li>
                  Exhale and drive through your heels to return to the starting
                  position. Focus on using your glutes and quadriceps to lift
                  your body back up. Keep your core engaged and your body
                  controlled throughout the movement.
                </li>{" "}
                <strong>6. Finishing the Movement:</strong>{" "}
                <li>
                  Once you return to the starting position, take a moment to
                  ensure your posture is correct, with your feet flat on the
                  ground, chest up, and shoulders back. Then, prepare for the
                  next repetition.{" "}
                </li>
                <strong>7. Repetition and Breathing:</strong>{" "}
                <li>
                  Repeat the squat for your desired number of repetitions,
                  inhaling as you lower down and exhaling as you come up.
                  Consistent breathing helps maintain blood pressure levels and
                  aids in stabilization during the exercise.
                </li>
              </ol>
            </div>
            <div className="mx-auto mt-24 flex flex-col gap-16 h-full lg:max-w-96 sm:w-full justify-between  px-4  lg:mt-0">
              {workout?.images?.[0] && (
                <img className="rounded-xl object-cover" src={workout.images[0].toString()} alt="" />
              )}
              {workout?.images?.[1] && (
                <img className="rounded-xl object-cover" src={workout.images[1].toString()} alt="" />
              )}

              {/* <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/nutrition.webp"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    Enterprise
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card> */}
            </div>
          </div>
        </div>
      </div>

     <div className="grid grid-cols-1 border border-purple-800 h-full lg:-mt-28 w-96" >
     <Card className="w-96">
      <CardHeader shadow={false} floated={false} >
        <img
          src='/img/nutrition.webp'
          alt="card-image"
          className="h-24 w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="lg:-mt-3 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Cant find a workout just for you?
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >Create your own! Contact us for a custom workout plan or to create a workout plan that can be shared with others.
        </Typography>
      </CardBody>
      <CardFooter>
 <Button
          ripple={false}
          fullWidth={true}
          className="rounded-md lg:-mt-7 w-full bg-purple-800 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
            Contact Us
        </Button>
      </CardFooter>
    </Card>
    <div>
    
    <Card className="w-96  flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      ><Typography variant="h3" className="mb-8 underline w-96">
                    Latest Gear{" "}
                    </Typography>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-32 mx-auto w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 mt-4 w-full uppercase">
          Gym Hoodie
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Hoodie of the week
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
    </div>
     </div>
    </div>
  );
};

export default Instructions;
