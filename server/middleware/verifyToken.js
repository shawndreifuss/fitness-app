const jwt = require("jsonwebtoken");

// Assuming you're using Express and cookie-parser is set up
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Split "Bearer TOKEN_HERE" and get the token
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the user (decoded token) to the request object
    req.user = decoded;
    next(); // Pass control to the next middleware function
  } catch (err) {
    // Handle invalid token
    return res.status(401).send("Invalid Token");
  }
};

module.exports = verifyToken;
