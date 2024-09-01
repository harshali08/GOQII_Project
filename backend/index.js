const express=require('express');
const mysql=require('mysql')
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/user',(req,resp)=>{
    const sql="INSERT INTO users (Name,Email,Password,DOB) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.dob
    ]

    db.query(sql,[values],(err,result)=>{
        if(err) return resp.json(err);
        return resp.json(result)
    })
})

app.listen(8081,()=>{
    console.log("Listening.....");
})