const express = require('express')             // This is package.
const app = express();
const path = require('path');

app.use(express.json());                       //This is parsers for form.
app.use(express.urlencoded({extended:true})); 
app.use(express.static(path.join(__dirname,'public')));     //To acess public,static,javascripts through this line of code. 
app.set('view engine','ejs'); 

app.get("/",function(req,res){                 // Creating Routing
    res.render("index");                       // using ejs Engine
});

app.get("/public/:username/", function(req,res){     // Creating Dynamic routing
    res.send(req.params.username)
})

app.get("/public/:username/:age",function(req,res){     // Creating Dynamic Routing
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`)
})

app.listen(3000, function(){                   //Localhost 
    console.log("I am running")
})