import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Hero from './components/Hero';
import WorkoutCard from './components/WorkoutCard';
import { searchWorkouts } from '../../../context/workoutActions';

// Assuming searchWorkouts function is updated to handle muscle group filtering

function Workouts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const [uniqueMuscleGroups, setUniqueMuscleGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const workoutsPerPage = 15;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await searchWorkouts(searchTerm, selectedMuscle, selectedDifficulty);
        setWorkouts(data.slice((currentPage - 1) * workoutsPerPage, currentPage * workoutsPerPage));
        setTotalPages(Math.ceil(data.length / workoutsPerPage));

        // Extract and deduplicate muscle groups from fetched data
        const muscleGroups = new Set();
        data.forEach(workout => {
          workout.primaryMuscles.forEach(muscle => muscleGroups.add(muscle));
          workout.secondaryMuscles.forEach(muscle => muscleGroups.add(muscle));
        });
        setUniqueMuscleGroups([...muscleGroups]);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchWorkouts();
  }, [searchTerm, selectedMuscle, selectedDifficulty, currentPage]);

  const onPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getPaginationRange = () => {
    return _.range(Math.max(currentPage - 2, 1), Math.min(currentPage + 2, totalPages) + 1);
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Hero setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">Muscle Groups</h4>
          <ul className="mt-4 w-[75%] overflow-x-scroll flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            {uniqueMuscleGroups.map((muscle) => (
              <li key={muscle} onClick={() => setSelectedMuscle(muscle)}>
                <div className="cursor-pointer text-base font-medium text-purple-500 hover:text-brand-500 dark:text-white">
                  {muscle}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </div>

        <div className="flex overflow-x-auto sm:justify-center mt-10">
          <nav aria-label="Page navigation">
            <ul className="list-style-none flex">
              <li>
              <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
                      className={`relative block border rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 ${currentPage === 1 ? 'text-neutral-400' : 'hover:bg-neutral-100'}`}>
                Previous
              </button>
            </li>
              {getPaginationRange().map((number) => (
              <li key={number}>
                <button onClick={() => onPageChange(number)}
                        className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 ${number === currentPage ? 'text-neutral-900 bg-purple-200': 'hover:bg-neutral-100'}`}>
                  {number}
                </button>
              </li>
            ))}
              <li>
              <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
                      className={`relative block border rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 ${currentPage === totalPages ? 'text-neutral-400' : 'hover:bg-neutral-100'}`}>
                Next
              </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
