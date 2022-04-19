
// const config = {
//     user :'test',
//     password :'123456789',
//     server:'localhost',
//     database:'db_a7d93e_dba',
//     options: {
//       encrypt: true, 
//       trustServerCertificate: true,
//     },
//   };
  
//  async () => {
//     try {
//       const pool = await new sql.connect(config);
//       return pool;
//     } catch (error) {
//       console.error(error);
//     }
//   };
var Connection = require('tedious').Connection;  
var config = {  
    server: 'SQL5105.site4now.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'db_a7d93e_dba_admin', //update me
            password: '123456789Aa'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'db_a7d93e_dba',  //update me
              trustServerCertificate: true,

    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
    console.log(err)
});


// connection.connect();
  
module.exports = config;