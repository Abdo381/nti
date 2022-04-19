const config = require('../../database/connection');
const sql = require('mssql');
class Cust {
    async getCust(){
       
            const coonn = await sql.connect(config);
            const cust = await coonn.request()
            .query("SELECT *from customers")
            return cust.recordset
        
      
}
async  addCust(name,Phone,Addres,Email) {
    try {
        const pool = await sql.connect(config);
        const insertOrder = await pool.request()
            .input('name', sql.VarChar, name)
            .input('Phone', sql.VarChar, Phone)
            .input('Addres', sql.VarChar, Addres)
            .input('Email', sql.VarChar, Email)
          
            .query('insert into customers(Name,Addres,Phone,Email) values (@name,@addres,@phone,@email)');
        return insertOrder.recordset;
    }
    catch (err) {
        console.log(err);
    }

}
 async getCustByPhone(Phone){
     try {
         
        const connec = await sql.connect(config)
        const phone =await connec.request()
        .input('Phone' , sql.VarChar , Phone)
        .query('select * from customers where Phone= @Phone')
        return phone.recordset
     } catch (e) {
         console.log(e)
     }
 }
}
module.exports = new Cust()