const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Ceritas_Questionaire_Answers';
const client = new MongoClient(url);

async function connect() {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    return client.db(dbName);
}

module.exports = { connect };

// TODO: implement graceful shutdown in manual server close / server restart
// Additional error handling
// Add monitoring and tuning 
//  (Monitor your application's performance and database usage. 
//   MongoDB and the Node.js driver offer various settings for tuning the connection pool size and other parameters. 
//   Adjust these settings based on your application's needs and deployment environment.)