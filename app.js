
// Require express
const express = require('express');
const app = express();

//Require JSON data

const {projects}= require('./data.json');

//Set view engine to pug 
app.set('view engine','pug');

//set up index route
app.get('/', (req,res)=>{
 
res.render('index',{projects});
});

// adding an about route

app.get('/about', (req,res)=>{

    res.render('about');

});

//Starting a server on port 3000

app.listen(process.env.PORT || 3000,() =>{
console.log('The application is running on localhost 3000');

});

