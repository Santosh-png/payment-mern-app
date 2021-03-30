const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res) =>{
    res.send("I am for port  4000 on local machine too.");
})
app.listen(PORT,
    console.log("I am running at port 4000.")
    );