import express from "express";
import pool from './db.js';

pool.connect((err) =>{
    if(err){
        return console.error('Error acquiring client',err.stack);
    }
    console.log('Connected to the database');
})
const app = express();

app.get("/",(req,res) =>{
    res.send("AI_Interview Server up and running")
});

app.get("/check/:email/:password",async(req,res) =>{
    const {email,password} = req.params;   
    const result = await pool.query(
        `SELECT * FROM users WHERE email = $1 AND password = $2`,
        [email, password]
      );
// console.log(email,password)
// console.log(result)
    if(result.rowCount === 1){
        res.send(result.rows[0]);
    }else{
        res.send('User not found');
    }
});

app.listen(5000,() => {
    console.log("Server is running on port 5000");
});
