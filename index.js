const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const portNumber = 3000;

// database connection
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database connected');
});

// application
app.use(express.json());

app.listen(portNumber, () => {
  console.log(`Server started at ${portNumber}`);
});
