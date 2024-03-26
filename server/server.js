const express = require('express');
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
app.use(cors({
  origin:  'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());


// Routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});