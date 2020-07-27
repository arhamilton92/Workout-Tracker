const express = require("express");
const fs = require('fs');
const router = express.Router();
const db = require('/models');
const path = require('path');

router.get("/api/config", (req, res) => {
    db.Workout.find({}).then((foundWorkouts) => {
        res.json({
            success: true,
            data: foundWorkouts,
        });
    });
});

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    })
});

module.exports = router;