const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS module

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Define a route to handle POST requests to '/submit-answers'
app.post('/submit-answers', (req, res) => {
  console.log(req.body); // This will print the submitted form data to the console
  res.status(200).send('Data received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
