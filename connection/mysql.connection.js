const mysql=require('mysql');
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userdb'
})
connection.connect((err)=>{
  err?console.log(err.message):console.log('connected to database userdb');
})

module.exports=connection;
