// helpful for managing configuration settings and sensitive information 
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL; // Define DB_URL before using it

mongoose.connect(DB_URL).then(() => {
    console.log("Database connected");
});

const routesIndex = require('./routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routesIndex);

app.use((err, req, res, next) => {
    const errMsg = err ? err.toString() : "Error...";
    res.status(500).json({ data: "", msg: errMsg });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
