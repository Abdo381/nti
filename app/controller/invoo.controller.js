const InvooModel = require("../../database/model/invoo.model")
class Invoo{
    static getInvo = async (req,res)=>{
        const get = await InvooModel.getInvoo();
        if(get.length===0){
            res.status(500).send({apiStatus:false, message:"invalid get data"})
        }
        else{
            res.send(get)
        } 
    }
    static status = async(req,res)=>{
        const update = await InvooModel.status(req.body.id,req.body.state);
            res.send(update)  
    }
    static max=async(req,res)=>{
        const getId = await InvooModel.maxId()
       
            res.send(getId)
        
    }
    static namePage = async(req,res)=>{
        const getPage = await InvooModel.namePage()
        res.send(getPage)
    }
    static hotKey = async (req,res)=>{
        const hotKey = await InvooModel.hotKey(req.body.namePage)
        res.send(hotKey)

    }
    static getProduct =async(req,res)=>{
        const product =await InvooModel.product()
        res.send(product)
    }
    static getprod = async (req,res)=>{
        try {
            const prod = await InvooModel.getProd() 
            res.send(prod)
        } catch (error) {
            res.send(error)
        }
      
    }
    static check = async (req,res)=>{
        const check = await InvooModel.check(req.body.barcode)
try {
    if(check.length===0){
        res.status(500).send({apiStatus:false, message:"invalid login"})
    }else{
         res.send(check)
    }
} catch (error) {
    res.status(500).send({apiStatus:false,data:error, message:"invalid login"})

}


     }
}
module.exports= Invoo