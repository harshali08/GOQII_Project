const express=require('express');
const mysql=require('mysql')
const cors=require('cors')

const app=express();
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get('/',(req,resp)=>{
    const sql="SELECT * FROM users";
    db.query(sql,(err,result)=>{
        if(err) return resp.json({Message:"error"});
        return resp.json(result)
    })
})

app.listen(8081,()=>{
    console.log("Listening.....");
})