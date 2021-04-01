const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 4000;

app.get('/',(req,res) =>{
    res.send("I am for port  4000 on local machine too.");
})
//Client ID : 67395368495-0lj1ve7rfvvc5q2otssaq89a09usqdba.apps.googleusercontent.com
//Client Secret : sodb-SPYdhGNNvKySEWb68-M
passport.use(new GoogleStrategy({}));


app.listen(PORT,
    console.log("I am running at port 4000.")
    );