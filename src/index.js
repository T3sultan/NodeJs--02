const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Node Js Assignment two");
})

app.listen(8060,()=>{
    console.log("Server listing on port 8060")
})