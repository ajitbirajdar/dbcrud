const connection=require('../connection/mysql.connection');

module.exports={
    getAll:(req,res)=>{
        connection.query('SELECT id, name, mobile, age FROM user',(err,result)=>{
            err?res.send({error:true,message:err.message}):res.send({error:false,data:result});
        })
    },
    newUser:(req,res)=>{
        connection.query(`INSERT INTO user(id, name, mobile, age) VALUES (0,'${req.body.name}','${req.body.mobile}',${req.body.age})`,(err,result)=>{
           if(err){
               res.send({error:true,message:err.message})}
               else{
                   if(result.affectedRows>0){
                    res.send({error:false,message:"new user created"});
                   }
                
               }
            
            
        })
    },
    updateUser:(req,res)=>{
        connection.query(`UPDATE user SET mobile='${req.body.mobile}' WHERE id='${req.params.id}'`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message})}
                else{
                    if(result.affectedRows>0){
                     res.send({error:false,message:"mobile number updated"});
                    }
                 
                }
        })
    },
    deleteUser:(req,res)=>{
        connection.query(`DELETE FROM user WHERE id=${req.params.id}`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message})}
                else{
                    if(result.affectedRows>0){
                     res.send({error:false,message:"user deleted"});
                    }
                 
                }
        })
    },
    findUser:(req,res)=>{
        connection.query(`SELECT id, name, mobile, age FROM user where id=${req.params.id}`,(err,result)=>{
            err?res.send({error:true,message:err.message}):res.send({error:false,data:result});
        })
    }

}