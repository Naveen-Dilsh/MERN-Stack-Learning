const Machine = require("../models/machinemodel")
const mongoose = require("mongoose")

//get all workouts
const getMachine = async(req, res) =>{
    const machines = await Machine.find({}).sort({createdAt: -1})
    res.status(200).json(machines)
}

//Add machine
const createMachine = async(req, res) =>{
    const{MName,Mtype} = req.body
    
    //add doc to db
    try{
        const machine = await Machine.create({MName,Mtype})
        res.status(200).json(machine)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports ={
    getMachine,
    createMachine,
}