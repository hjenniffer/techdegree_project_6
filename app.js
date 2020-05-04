
// Require express
const express = require('express');
const app = express();

//set up index route
app.get('/', (req,res)=>{
 
res.render('index',{projects});
});


//Starting a server on port 3000

//app.listen(process.env.PORT || 3000,() =>{
//console.log('The application is running on localhost 3000')


//});

app.listen(3000);