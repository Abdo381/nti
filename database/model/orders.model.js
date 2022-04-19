const config = require('../../database/connection');
const sql = require('mssql');
class Order{
    async  addOrder(id,date,namePage,custPhone,custName,custAddres,SellerName,Notes,Delivery,TotalPayments,phone,hot_key,status) {

        try {
            const pool = await sql.connect(config);
            const insertOrder = await pool.request() 
                .input('id', sql.Int,id)
                .input('date', sql.VarChar,date)
                .input('namePage', sql.VarChar,namePage)
                .input('custPhone', sql.VarChar,custPhone)
                .input('custName', sql.VarChar,custName)
                .input('custAddres', sql.VarChar,custAddres)
                .input('SellerName', sql.VarChar,SellerName)
                .input('Notes', sql.VarChar,Notes)
                .input('Delivery', sql.Decimal,Delivery)
                .input('TotalPayments', sql.Decimal,TotalPayments)
                .input('phone', sql.VarChar,phone)
                .input('hot_key', sql.VarChar,hot_key)
                .input('status', sql.VarChar,status)

                .query('insert into orders(ID ,Date,NamePage,CustPhone, CustName, CustAddres,SellerName,Notes,TotalPayments,Phone_page,Delivery,hot_key,status)values(@id,@date,@namePage,@custPhone,@custName,@custAddres,@SellerName,@Notes,@TotalPayments,@phone,@Delivery,@hot_key,@status)');
            return insertOrder.recordset;
        }
        catch (err) {
            console.log(err);
        }
    
    }
    async addInfo(id,Barcode,productName,Discount,pric,Quantity,Total,Discription){
try {
    const conn = await sql.connect(config)
    const addInfo = await conn.request()
    .input('id', sql.Int,id)
    .input('Barcode',sql.Int,Barcode)
    .input('productName',sql.VarChar,productName)
    .input('Discount',Discount)
    .input('pric', pric)
    .input('Quantity', sql.Int,Quantity)
    .input('Total', Total)
    .input('Discription',sql.VarChar,Discription)
    .execute('infoOrder')
    return addInfo.recordset;
} catch (error) {
    console.log(error)
}
    }
    async delete(id,Barcode,Quantity){
        try {
            const conn = await sql.connect(config)
            const delInfo = await conn.request()
            .input('id', sql.Int,id)
            .input('Barcode',sql.Int,Barcode)
            .input('Quantity',sql.Int,Quantity)

            .query("delete from info where IDO=@id and Barcode=@Barcode  update productss set Quantity=Quantity+@Quantity where Barcode=@Barcode")
            return delInfo.recordset
        } catch (error) {
            console.log(error)
        }
      
    }
    async updateInfo(id,Barcode,Quantity,Discount,Total){
        try {
            const conn = await sql.connect(config)
            const upInfo = await conn.request()
            .input('id', sql.Int,id)
            .input('Barcode', sql.Int,Barcode)
            .input('Quantity', sql.Int,Quantity)
            .input('Discount',Discount)
            .input('Total', Total)
            .query('update info set Discount=@Discount,Total=@Total,Quantity=@Quantity where IDO=@id and Barcode=@Barcode')
            return upInfo.recordset;
        } catch (error) {
            console.log(error)
        }
            }


            async invo(id){
                try {
                    const invo = await sql.connect(config)
                    const thisInvo = await invo.request()
                    .input('id', sql.Int,id)
                    .query("select *from info where IDO=@id")
                    // .query("select * from orders where ID=@id")
                    return thisInvo.recordset
                } catch (error) {
                    console.log(error)
                }
            }
            async invoo(id){
                try {
                    const invo = await sql.connect(config)
                    const thisInvo = await invo.request()
                    .input('id', sql.Int,id)
                    // .query("select *from info where IDO=@id")
                    .query("select * from orders where ID=@id")
                    return thisInvo.recordset
                } catch (error) {
                    console.log(error)
                }
            }
            async upInvo(id,Barcode,Quantity,Discount,QtyB,Total){
                try {
                    const invo = await sql.connect(config)
                    const upinvo = await invo.request()
                    .input('id', sql.Int,id)
                    .input('Barcode', sql.Int,Barcode)
                    .input('Quantity', sql.Int,Quantity)
                    .input('Discount', sql.Int,Discount)
                    .input('Total', sql.Int,Total)
                    .input('QtyB', sql.Int,QtyB)
                    .query("update info set Quantity=@Quantity ,Discount=@Discount, Total=@Total where IDO=@id and Barcode=@Barcode   update productss set Quantity=Quantity+@QtyB where Barcode=@Barcode " )
                    return upinvo.recordset

                } catch (error) {
                    console.log(error)
                }
            }
            async uinvoo(id,TotalPayments,Delivery){
                try {
                    const invo = await sql.connect(config)
                    const thisInvo = await invo.request()
                    .input('id', sql.Int,id)
                    .input('TotalPayments', sql.Int,TotalPayments)
                    .input('Delivery', sql.Int,Delivery)
                    // .query("select *from info where IDO=@id")
                    .query("update orders set Delivery=@Delivery ,TotalPayments=@TotalPayments where ID=@id")
                    return thisInvo.recordset
                } catch (error) {
                    console.log(error)
                }
            }
            async Idelete(id){
                try {
                    const invo = await sql.connect(config)
                    const thisInvo = await invo.request()
                    .input('id', sql.Int,id)
                    .query("delete from orders where ID=@id")
                    return thisInvo.recordset
                } catch (error) {
                    console.log(error)
                }
            }
            async Odeletee(id){
                try {
                    const invo = await sql.connect(config)
                    const thisInvo = await invo.request()
                    .input('id', sql.Int,id)
                    .query("delete from info where IDO=@id")
                    return thisInvo.recordset
                } catch (error) {
                    console.log(error)
                }
            }
}
module.exports= new Order()