const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("I am running well ato port 5000");
})
app.listen(5000,
    console.log("I am running at port 5000.")
    );