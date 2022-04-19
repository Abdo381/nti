
const CustModel = require("../../database/model/cust.model")
class Cust{
    static load = async(req,res)=>{
        try{
        const custs = await CustModel.getCust()
        res.send(custs)
        }catch(error){  
            console.log(error)
        }
    }
    static addCust =async(req,res)=>{
        try {
            const load = await CustModel.addCust(req.body.name,req.body.Phone,req.body.Addres,req.body.Email)
            res.status(200).send({
                apiStatus:true,
                data:load, 
                message:"successful"})
        } catch (e) {
            res.status(500).send({apiStatus:false, data:e.message, message:"invalid login"})

        }
    }
    static getCust =async (req,res)=>{
    
            const getCust = await CustModel.getCustByPhone(req.body.Phone)
            if(getCust.length ===0){
                res.status(500).send({apiStatus:false, message:"invalid login"})

            }else{
                res.send(getCust)
            }
          
        
    }
}
module.exports= Cust