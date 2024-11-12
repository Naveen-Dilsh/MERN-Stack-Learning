require("dotenv").config()

const express = require('express');
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")


// express app
const app = express()

//midleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)
// app.get("/",(req,res) =>{
//     res.json({mssg:"welcome to the app"})
// })


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        //listen for requests
        app.listen(process.env.PORT, ()=>{
        console.log("connected to listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


