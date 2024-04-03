// TODO: Implement the WorkoutCard component with users chosen preferences of difficulty 


import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import formatMonthAndYear from "../../../utils/DateFormat";
import { searchWorkouts } from "../../../context/workoutActions";
import { Link } from "react-router-dom";
import axios from "axios"; // Ensure axios is used for API calls

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

const difficulties = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

export function WorkoutCard({searchTerm, setSearchTerm}) {
  
  const [selectedCategory, setSelectedCategory] = useState( "all");
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    "");
  console.log(selectedCategory, selectedDifficulty);
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 15;
  const [totalPages, setTotalPages] = useState(0);

  // Update and save state to localStorage
 //Possible TODO: Save useState variables to localstorage on refresh
  // useEffect(() => {
  //   localStorage.setItem('selectedCategory', selectedCategory);
  //   // TODO: localStorage.setItem('selectedDifficulty', selectedDifficulty);
  //   localStorage.setItem('searchTerm', searchTerm);
  // }, [selectedCategory, selectedDifficulty, searchTerm]);

  // Fetch workouts based on search term, category, and difficulty
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workoutsData = await searchWorkouts(searchTerm, selectedCategory, selectedDifficulty);
        const filteredData = workoutsData.slice(
          (currentPage - 1) * workoutsPerPage,
          currentPage * workoutsPerPage
        );
        setWorkouts(filteredData);
        setTotalPages(Math.ceil(workoutsData.length / workoutsPerPage));
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchWorkouts();
  }, [selectedCategory, selectedDifficulty, searchTerm, currentPage]);

  return (
    <section className="grid min-h-screen place-items-center p-8 pb-0">
     

      {/* Corrected Difficulty and Categories Tabs */}
      <Tabs value={selectedDifficulty}
         className="mx-auto max-w-7xl w-full">
        <TabsHeader>
          {difficulties.map((difficulty) => (
            <Tab key={difficulty.value} onClick={() => setSelectedDifficulty(difficulty.value)} value={difficulty.value}>
              {difficulty.label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>

      <Tabs value={selectedCategory}
         className="mx-auto max-w-7xl w-full ">
        <TabsHeader>
          {categories.map((category) => (
            <Tab key={category.value} onClick={() => setSelectedCategory(category.value)} value={category.value}>
              {category.label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>

      <div className="container grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {workouts.map((workout) => (
          <Card key={workout?._id} shadow={true}>
            <Card shadow={true} key={workout?._id}>
              <CardHeader>
                <img
                  src="https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg" //placeholder image
                  alt={workout?._id}
                  className="h-full w-full scale-110 object-cover"
                />
              </CardHeader>
              <CardBody className="p-6">
                <div className="flex justify-between">
                  <Typography
                    variant="small"
                    color="blue"
                    className="mb-2 !font-medium"
                  >
                    {workout?.category}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue"
                    className="mb-2 !font-medium"
                  >
                    {workout?.difficulty}
                  </Typography>
                </div>
                <Typography
                  as="a"
                  href="#"
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 normal-case transition-colors hover:text-gray-900"
                >
                  {workout?.exercises[0]?.name}
                </Typography>
                <Typography className="mb-6 font-normal !text-gray-500">
                  {workout?.exercises[0]?.notes}
                </Typography>
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="sm"
                      variant="circular"
                      src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                      alt=""
                    />
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-0.5 !font-medium"
                      >
                        Shawn
                        {/* placeholder name */}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="text-xs !text-gray-500 font-normal"
                      >
                        {formatMonthAndYear(workout?.date)}
                      </Typography>
                    </div>
                  </div>
                  <Link to={`/workouts/${workout?._id}`}>
                  <Button>View</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className="mx-1"
          >{number + 1}</button>
        ))}
      </div>
    </section>
  );
}

export default WorkoutCard;
