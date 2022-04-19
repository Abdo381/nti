const ordersModel = require("../../database/model/orders.model")
const OrderModel = require("../../database/model/orders.model")

class Orders {

    static addOrder = async (req, res) => {
        try {
            const add = await OrderModel.addOrder(req.body.id,
                req.body.date,
                req.body.namePage,
                req.body.custPhone,
                req.body.custName,
                req.body.custAddres,
                req.body.SellerName,
                req.body.Notes,
                req.body.Delivery,
                req.body.TotalPayments,
                req.body.phone,
                req.body.hot_key,req.body.status)
            res.send(add)
      
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "invalid login" })

        }
    }
    static addInfo = async (req,res)=>{
        const add = await ordersModel.addInfo(req.body.id,
            req.body.Barcode,
            req.body.productName,
            req.body.Discount,
            req.body.pric,
            req.body.Quantity,
            req.body.Total,
            req.body.Discription,)
            res.send(add)
    }
    static updateInfo = async (req,res)=>{
        const update = await ordersModel.updateInfo(req.body.id,req.body.Barcode,
            req.body.Quantity,
            req.body.Discount,
            req.body.Total)
            res.send(update)
    }
    static deleteInfo = async(req,res)=>{
        const del  = await ordersModel.delete(req.body.id,req.body.Barcode,req.body.Quantity)
        res.send(del)
    }
    static invo = async (req,res)=>{
        const invo = await ordersModel.invo(req.body.id)
        res.send(invo)
    }
    static invoo = async (req,res)=>{
        const invo = await ordersModel.invoo(req.body.id)
        res.send(invo)
    }
    static upinvo = async (req,res)=>{
        const invo = await ordersModel.upInvo(req.body.id,req.body.Barcode,req.body.Quantity,req.body.Discount,req.body.QtyB,req.body.Total)
        res.send(invo)
    }
    static uinvoo = async (req,res)=>{
        const invo = await ordersModel.uinvoo(req.body.id,req.body.TotalPayments,req.body.Delivery)
        res.send(invo)
    }
  
    static Idelete = async (req,res)=>{
        const invo = await ordersModel.Idelete(req.body.id)
        res.send(invo)
    }
     static Odelete = async (req,res)=>{
        const invo = await ordersModel.Odeletee(req.body.id)
        res.send(invo)
    }

}
module.exports=Orders