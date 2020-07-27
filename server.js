
// DEPENDENCIES -------------------------
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const htmlRoutes = require('./routes/html-routes.js')
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
    console.log('Mongoose connected.');
});
// -----------------------------------------------------------------------------------^


// ROUTES -------------------
app.use(htmlRoutes);
// app.use(apiRoutes);
// -------------------------^


// LISTENER -------------------------------------------------
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});
// ---------------------------------------------------------^