const config = require('../../database/connection');
const sql = require('mssql');
class Users{
    async  getUsers(users,password,type) {
        try {
            let pool = await sql.connect(config);
            let lod = await pool.request()
            .input('users', sql.VarChar,users)
            .input('password', sql.VarChar,password)
            .input('type', sql.VarChar,type)
            .query("SELECT * from US where users = @users and password=@password and type=@type");
            return lod.recordset;
        }
        catch (error) {
            console.log(error);
        }
    }
}
module.exports=new Users()