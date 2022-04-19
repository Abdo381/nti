const ItemModel = require('../../database/model/item.model')
class item {
static getitem = async (req,res)=>{
    try {
        const output = await ItemModel.getall();
        res.status(200).send({
            apiStatus:true,
            data:output, 
            message:""
        })
    } catch (e) {
        res.status(500).send({apiStatus:false, data:e.message, message:"invalid login"})
    }
}
static getByid=async(req,res)=>{
 
        const itemcode =await ItemModel.getItemByID(req.body.code);
        if(itemcode.length===0){ res.status(500).send({apiStatus:false,message:"invalid login"})
    }
    else{
        res.status(200).send({
            apiStatus:true,
            data:itemcode, 
            message:"logged in"
        })
    }
      

}
}
module.exports= item