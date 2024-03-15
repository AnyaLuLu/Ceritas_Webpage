const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS module
const { connect } = require('./db');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Define a route to handle POST requests to '/submit-answers'
app.post('/submit-answers', async (req, res) => {
    console.log(req.body); // This will print the submitted form data to the console
    console.log('Data received');

    try {
        const db = await connect();
        console.log('Connected successfully to server');
        const collection = db.collection('answers');
        
        const answers = Object.keys(req.body).filter(key => key.startsWith('q')).map(key => {
            const num = key.substring(1); // Extract question number
            return {
                questionNumber: `q${num}`,
                questionText: req.body[`q${num}`],
                answer: req.body[`a${num}`]
            };
        });

        // Insert answers into the database
        for(const answer of answers){
            await collection.updateOne(
                { questionNumber: answer.questionNumber },
                { $set: answer },
                { upsert: true }
            );
        }
        res.status(200).send('Data received and stored');
        console.log('Data received and stored');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error storing data');
        console.log('Error storing data');
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
