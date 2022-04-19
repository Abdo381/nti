const router = require('express').Router()
const Orders = require("../app/controller/orders.controller")
router.post("/addOrder", Orders.addOrder)
router.post("/addInfo", Orders.addInfo)
router.post("/updatInfo", Orders.updateInfo)
router.post("/deleteInfo", Orders.deleteInfo)
router.post("/showThisInvo", Orders.invo)
router.post("/showThisInvoo", Orders.invoo)
router.post("/upInvoo", Orders.upinvo)
router.post("/upInvooo", Orders.uinvoo)
router.post("/delete", Orders.Idelete)
router.post("/deletee", Orders.Odelete)





module.exports= router