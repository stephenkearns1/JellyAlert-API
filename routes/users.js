var express = require('express');
var mysql = require("mysql");
var connection = require('./Helpers/DbConnectionManager');
var bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
var expressSanitizer = require("sanitizer"); 

var router = express.Router();


router.post('/login', function(req, res, next) {
  var username = req.body.username;
    var password = req.body.password;
    
    //added tests for empty strings as they seem to pass this if statement even if null or empty which makes sense because technically the variable is defined its just empty
    if ((username === undefined || password === undefined) || !(username.trim() || password.trim())) {
        console.log("made it to undefined");
        res.status(401).json({ "messages": { 'strResponse': 'Invalid credentials'} });

    }

    //sanitize the input to protect agaisnt XSS
   // username = expressSanitizer.sanitize(username);
    // password = expressSanitizer.sanitize(password);
    
    console.log("made it past undefined, username is: " + username);

    connection.query(mysql.format('SELECT * FROM users WHERE username = ?', username)).then(function(result) {
        if (result.length === 0) {
            res.status(401).json({ "messages": { 'strResponse': 'user does not exist'} });
        }
        else {
            //TODO instead of using the password I might generate the token based on the user input
            //compares user sent and stored password
            if (!bcrypt.compareSync(password, result[0].password)) {
                console.log('test: Invalid pasword');
                res.status(401).json({ "messages": { 'strResponse': 'Invalid password'} });

            }else{
                //Generate token
                var payload = {
                    id: username,
                    password: result[0].password
                };
    
    
                //get secret 
                var secret = "TestTestTest123"

                // Refactor: to read secret from file instead of having it easily readBLE 
                var jwtToken = jwt.sign(payload, secret, { expiresIn: '24h' })
                
                //just commenting out so I can test as seems to cause some sort of error when semi-colion is added which is very strange
                return connection.query(mysql.format('UPDATE users SET token = ? WHERE username = ? ', [jwtToken, username])).then(function(){
                     res.status(200).json({ "messages": { 'strResponse': jwtToken}, "userDetails": { 'fName': 'Hassan' } });
                }).catch(function(e) {
                    console.log(e);
                     res.status(500).json({ "messages": { 'strResponse': 'failed to store token'} });
                });
                
            }
        }

    }).catch(TypeError, function(e) {
        console.log("Something went wrong, reported error is: " + e);
        res.status(500);
    }).catch(ReferenceError, function(e) {
        console.log("Something went wrong, reported error is: " + e);
        res.status(500);
    }).catch(function(e) {
        res.status(503).json({ "messages": { 'strResponse': "Could not connect to database to validate username"} });
    });

});

router.post('/signup', function(req,res,next){
    
    var firstName = req.body.firstname;
    var secondName = req.body.secondname;
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var user;
    
    if(firstName == undefined || secondName == undefined || password == undefined || email == undefined){
            
    }
    
    username = expressSanitizer.sanitize(username);
    password = expressSanitizer.sanitize(password);
    firstName = expressSanitizer.sanitize(firstName);
    secondName = expressSanitizer.sanitize(secondName);
    email = expressSanitizer.sanitize(email);
    
    
     connection.query(mysql.format('SELECT * FROM users WHERE username = ? OR email = ?', [username, email])).then(function(results) {
        console.log(results)
        if (!(results.length === 0)) {
            if (results[0].username === username) {
                
                res.status(409).json({ "messages": { 'strResponse': 'Username Already taken'} });
            }
            else if (results[0].email === email) {
                res.status(409).json({ "messages": { 'strResponse': 'Email Already taken' } });
            }


        }
        else {
            user = {
                username: username,
                password: password,
                firstname: firstName,
                secondname: secondName,
            };
            return connection.query(mysql.format('INSERT INTO users SET ?', user)).then(function() {
                //The users has been added to the db so notify them
                res.status(200).json({ "messages": { 'strResponse': 'Success' } });

            });
        }

    }).catch(function(e) {
        logging.errorLog(username, e);
        res.status(500);
    });



    
});

router.get('/info/{userid}', function(req, res, next) {


});

router.delete('/id', function(req, res, next) {


});






module.exports = router;
