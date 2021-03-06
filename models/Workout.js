
// DEPENDENCIES -----------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// -----------------------------------^


// WORKOUT SCHEMA -------------------
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }]
});
// ---------------------------------^


// WORKOUT MODEL ------------------------------------------
const Workout = mongoose.model("Workout", WorkoutSchema);
// -------------------------------------------------------^

module.exports = Workout;