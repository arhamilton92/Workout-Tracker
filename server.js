
// DEPENDENCIES -------------------------
const express = require('express');
const mongoose = require('mongoose');
const app = express();
// -------------------------------------^


// EXPRESS SETUP-----------------------------------
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
// -----------------------------------------------^


// MONGOOSE SETUP --------------------------------------------------------------------
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutTracker', { 
    useNewUrlParser: true, useUnifiedTopology:true 
});
//
const connection = mongoose.connection;
//
connection.on('connected', () => {
    console.log('Mongoose successfully connected.');
});
connection.on('connected', (err) => {
    console.log('Mongoose connection error: ', err);
});
// -----------------------------------------------------------------------------------^


// LISTENER -------------------------------------------------
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});
// ---------------------------------------------------------^