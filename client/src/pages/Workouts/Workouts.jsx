import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import Hero from './components/Hero';
import WorkoutCard from './components/WorkoutCard';

function Workouts() {
  const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <WorkoutCard searchTerm={searchTerm} />
        </div>
    );
}



export default Workouts;
