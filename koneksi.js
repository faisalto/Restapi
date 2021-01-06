var mysql = require('mysql');



//connetion to database 
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'restapi',
});


conn.connect((err) =>{
    if(err) throw err;
    console.log('Success');
});

module.exports = conn;