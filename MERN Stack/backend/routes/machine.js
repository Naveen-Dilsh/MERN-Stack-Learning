const express = require("express");
const {
    getMachine,
    createMachine,
} = require("../controller/machineController")

const router = express.Router()

router.get("/",getMachine)

router.post('/',createMachine)

module.exports = router