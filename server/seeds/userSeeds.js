const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Sample first and last names
const firstNames = ["Alex", "Jamie", "Jordan", "Taylor", "Morgan", "Casey", "Avery", "Riley", "Peyton", "Quinn"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

const generateRealisticUserSeeds = async (numUsers = 50) => {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    // Generate random names
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${i}`;
    const email = `${username}@example.com`;

    // Hash password
    const hashedPassword = await bcrypt.hash("SecurePassword123", 10); // Example password, consider using environment variables or secure storage for production

    const user = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      phone: "7605555555", // Placeholder phone number  
        avatar: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais", // Placeholder avatar
        goal: "lose weight", // Placeholder goal
        settings: mongoose.Types.ObjectId(), // Placeholder
        fitnessStats: mongoose.Types.ObjectId(), // Placeholder
        favorites: { Workout: mongoose.Types.ObjectId(), likes: mongoose.Types.ObjectId(), dislike: mongoose.Types.ObjectId() }, // Placeholder
      isAdmin: Math.random() < 0.1, // Randomly make about 10% of users admins
      lastLogin: new Date(),
      achievements: [], // Add achievements as necessary
      createdAt: new Date(),
    };

    users.push(user);
  }

  return users;
};

// Example usage
generateRealisticUserSeeds().then(users => {
  console.log(users); // Display or insert into your database
  // e.g., User.insertMany(users)
});
