const mongoose = require("mongoose")

const Schema = mongoose.Schema

const machineSchema = new Schema({
    MName : {
        type: String,
        required : true
    },
    Mtype :{
        type:String,
        required:true
    },
}, {timestamps:true})

module.exports = mongoose.model("Machine",machineSchema)