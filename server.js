const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config({ path: './config.env' });

connectDB();

const data = require('./routes/getData');
const data1 = require('./routes/employee');

const app = express();

app.use(express.json());
app.use('/get', data);
app.use('/employee', data1);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
