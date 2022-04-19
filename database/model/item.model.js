const config = require('../../database/connection');
const sql = require('mssql');
 class ItemModel{
     async getall(){
        const conn = await sql.connect(config);
        const res = await conn.request()
        .query("SELECT * from items")
            return res.recordset
     
 }
 async getItemByID(itemId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, itemId)
            .query("SELECT * from items where Code = @input_parameter");
           return product.recordset

    }
    catch (error) {
        console.log(error);
    }
}
}
 module.exports= new ItemModel();
