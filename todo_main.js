var express = require('express');
var x = express();
var todo_controller = require("./controllers/todo_controller.js")

x.set('view engine', 'ejs');
//Static files
x.use('/assets', express.static('styles_pub')); // 1st param is excluded as its not for a specific route
// Firing controllers here
todo_controller(x);

// end controllers
x.listen(3000); 
console.log("Listening to port 3000");

//MVC: Model<==Controller==>View
