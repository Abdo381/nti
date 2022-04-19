const UsersModel = require ("../../database/model/user.model")
class User{
    static login = async (req,res)=>{
        
            const log = await UsersModel.getUsers(req.body.users,req.body.password,req.body.type);
            if(log.length===0){
                res.status(500).send({apiStatus:false, message:"invalid login"})
            }else{
                res.send(
                    log
                )
            } 
    }
}
module.exports= User