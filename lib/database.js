const mysql = require('mysql');

require('dotenv').config()
//connection BD

  const mysqlConnection = mysql.createConnection({
      host:process.env.DB_HOST, 
      user:process.env.DB_USER,
      password:process.env.DB_PASS,
      database:process.env.DB_NAME,
      multipleStatements:true
 });
//BD test kiero

//  const mysqlConnection = mysql.createConnection({
//      host:'10.4.28.101',
//       user:'sa',
//       password:'S3rv3r1-27!',
//       database: 'DBKiero_Productos',
//      multipleStatements:true
//   });

mysqlConnection.connect((err) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('DB connect!');
    }
});

module.exports = mysqlConnection;