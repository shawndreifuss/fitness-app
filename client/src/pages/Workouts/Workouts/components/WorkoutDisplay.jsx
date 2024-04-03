// TODO: Implement the WorkoutCard component with users chosen preferences of difficulty 


import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import formatMonthAndYear from "../../../../utils/DateFormat";
import { searchWorkouts } from "../../../../context/workoutActions";
import WorkoutCard from "./Cards/WorkoutCard";

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

export function WorkoutDisplay({searchTerm, setSearchTerm}) {
  
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
          <WorkoutCard 
          id={workout._id}
          key={workout._id}
          name={workout.name}
          category={workout.category}
          difficulty={workout.difficulty}
          notes={workout.notes}
          coach={workout.coach}
          date={formatMonthAndYear(workout.createdAt)}

          />
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

export default WorkoutDisplay;
