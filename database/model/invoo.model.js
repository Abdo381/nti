const config = require('../../database/connection');
const sql = require('mssql');
class Invoo{
    async  getInvoo() {
        try {
            let pool = await sql.connect(config);
            let invoo = await pool.request().query("SELECT ID,NamePage,CustName,TotalPayments,SellerName,Date ,Notes	,status FROM orders");
            return invoo.recordset;
        }
        catch (error) {
            console.log(error);
        }
    }
    async  status (id,state) {

        try {
            let pool = await sql.connect(config);
            let update = await pool.request()
                .input('id', sql.Int, id)
                .input('state', sql.VarChar, state)
                .query('update orders set status=@state where ID=@id');
            return update.recordset;
        }
        catch (err) {
            console.log(err);
        }
    
    }
    async maxId (){
        const maxIDOrder = await sql.connect(config)
        const id = await maxIDOrder.request()
        .query("select max(ID) as ID from  orders")
        return id.recordset;
    }
    async namePage(){
        const connec = await sql.connect(config)
        const name = await connec.request()
        .query("select * from add_page")
        return name.recordset
    }
    async hotKey(namePage){
        const connec = await sql.connect(config)
        const hotKey = await connec.request()
        .input('namePage', sql.VarChar, namePage)
        .query("select hot_key ,WhatsAppPhone from add_page where name=@namePage")
        return hotKey.recordset
    }
    async product (){
        const conn = await sql.connect(config)
        const product = await conn.request()
        .query("select name from productss")
        return product.recordset
    }
    async getProd(){
        const connn = await sql.connect(config)
        const product = await connn.request()
        .query("select Barcode ,Selling_Price ,name,Quantity,Discription from productss")
        return product.recordset
    }
    async  check(barcode) {
        try {
            let pool = await sql.connect(config);
            let lod = await pool.request()
            .input('barcode', sql.VarChar,barcode)
            .query("SELECT Quantity from productss where Barcode = @barcode ");
            return lod.recordset;
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports= new Invoo()