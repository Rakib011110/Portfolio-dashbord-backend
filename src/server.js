const app = require("./app");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Set the port
const PORT = process.env.PORT || 5000;

// Start the app
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
