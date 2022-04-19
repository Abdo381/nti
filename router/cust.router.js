const router = require('express').Router()
const Cust = require("../app/controller/cust.controller")
router.get("/get",Cust.load)
router.post("/addCust",Cust.addCust)
router.post("/phone",Cust.getCust)
module.exports =router