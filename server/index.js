const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send("I am running well ato port 5000.Hello sir!");
})
app.listen(PORT,
    console.log("I am running at port 5000. Hello ha ha ha .")
    );