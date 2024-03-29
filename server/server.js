const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const PORT = process.env.PORT 
const app = express();

//  Database
require('./config/db');

//  Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin to send requests
  credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions));
app.use(cookieParser());


// Routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});