const express = require("express");
const mongoose=require('mongoose')
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');


const app = express();

//Connetc db
mongoose.connect('mongodb://localhost/smartedu-db').then(()=>{
  console.log("Connected")
});
//Templeta engine
app.set('view engine', "ejs")
//Middleware
app.use(express.static('public'));
//Router
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on  port ${port}`);
});
