const config = require('../../database/connection');
const sql = require('mssql');

async function getitems() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from items");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getItemByID(itemId) {
    try {
        let pool = await sql.connect(config);
        let product =  await  pool.request()
            .input('input_parameter', sql.Int, itemId)
            .query("SELECT * from items where Code = @input_parameter ")
            return product.recordset
          
    }
    catch (error) {
        console.log(error);
    }
}
async function additem(item) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('id', sql.Int, item.ID)
            // .input('name', sql.NVarChar, item.Name)
            .execute('orderss');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}
module.exports={
    getitems:getitems,
    getItemByID:getItemByID,
    additem:additem
}