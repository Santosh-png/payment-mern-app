const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const PORT = process.env.PORT || 4000;

app.get('/',(req,res) =>{
    res.send("I am for port  4000 on local machine too.");
})

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, (accessToken) => {
        console.log(accessToken);
    })
);

app.get(
    '/auth/google',
    passport.authenticate(
        'google',
        {
            scope: ['profile','email']
        }
    )
);
app.listen(PORT,
    console.log("I am running at port 4000.")
    );