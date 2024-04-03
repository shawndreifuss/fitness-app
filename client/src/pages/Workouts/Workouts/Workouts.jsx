import React, { useState, useCallback } from 'react';
import Hero from './components/Hero';
import WorkoutDisplay from './components/WorkoutDisplay';

function Workouts() {
  const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <WorkoutDisplay searchTerm={searchTerm} />
        </div>
    );
}



export default Workouts;
