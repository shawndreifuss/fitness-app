const mongoose = require('mongoose');
const db = mongoose.connection; // This is the correct way to access the connection object
const { User, UserSettings, Fitness, Workout } = require('../models');
const generateWorkouts = require('./workoutSeeds');


// Assuming this function is defined in a file named cleanDB.js
const cleanDB = require('./cleanDb');

// Collection names to be cleaned
const collectionsToClean = ['users', 'userSettings'];

// Assuming '../config/db' exports a function to connect to MongoDB, ensure it's called correctly.
require('../config/db'); // This should establish the connection

db.once('open', async () => {
  try {
    cleanDB(collectionsToClean)
    .then(() => console.log('Database cleanup completed successfully.'))
    .catch(err => console.error('Database cleanup failed:', err));
    const workoutDataJson = generateWorkouts();
    const fs = require('fs');
fs.writeFileSync('workoutData.json', workoutDataJson, 'utf8');


   

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});


