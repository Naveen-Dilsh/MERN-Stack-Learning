const express = require("express")
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteworkout,
    updateworkout,
}=require("../controller/workoutController")

const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id',getWorkout)

//Post a new workout
router.post("/",createWorkout)

//Delete a workout
router.delete("/:id", deleteworkout)
//Update a workout
router.patch("/:id", updateworkout)

module.exports= router