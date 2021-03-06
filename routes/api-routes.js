
// DEPENDENCIES ---------------------
const db = require('../models');
const express = require('express');
const router = express.Router();
// ---------------------------------^


// ROUTES ------------------------------------------------------------------------------------------------------
// gets all workouts -----------------------------
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((allWorkouts) => {
        res.json(allWorkouts);
    });
});
// ----------------------------------------------^


//gets workouts in range. wasn't sure if it needed a specific number?
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(5).then((workouts) => {
      res.json(workouts)
    })
})
// ----------------------------------------------------^


// post new workout ---------------------------------
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then(newWorkout => {
      res.json(newWorkout)
  }).catch(err => {
      console.log(err);
      res.json({
          error: true,
          data: null,
          message: "error"
      })
  });
});
// -------------------------------------------------^


// update workouts ----------------------------------------------------------------------------------------
router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    db.Workout.findByIdAndUpdate(id, {$push: {"exercises": req.body}}, {"new": true}).then((update) => {
        res.json(update);
    });
});
// -------------------------------------------------------------------------------------------------------^
// ------------------------------------------------------------------------------------------------------------^


module.exports = router;