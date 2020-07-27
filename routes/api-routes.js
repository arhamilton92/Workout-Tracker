const express = require("express");
const router = express.Router();
const db = require('../models');

// router.get('/api/workouts', (req, res) => {
//     db.Workout.find({})
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500);
//     })
// });

module.exports = router;