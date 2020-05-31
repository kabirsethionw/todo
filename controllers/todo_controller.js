//var  data = [{item: 'Sleep'}, {item: 'Go on walk'}, {item: 'Threaten other dogs'}, {item:'Eat meat'}, {item:'Take bath or dry shampoo'}, {item:'Play'}];

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Kabir_Sethi:mongokabirdb@cluster0-sh5xs.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true,
useNewUrlParser: true});
// creating a schema - this is a blue print for toda db
var todoSchema = new mongoose.Schema({
    item: String
});

// creating a model
var Todo = mongoose.model('todo_db',todoSchema); 

var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(x){

    x.get("/todo", (req,res)=> {
        // getting data from mongoDB to be rendered on /todo 
        Todo.find({},(err,data)=>{ //we use Todo model/collection and get the whole data so find() has first param as{}
            if(err) throw err;
            res.render('todo.ejs', {todos: data});
        });
        
    });

    x.post("/todo", urlencodedParser, (req, res)=> {
        // getting data from view/todo.ejs and adding to mongoDB
        var newItem = Todo({item: req.body.item}).save((err, data)=>{
        if(err) throw err;
        res.json(data);
        console.log('item saved');
    });
        console.log("Recieved a post request ");
        console.log("going to ajax again.");
    });

    x.delete("/todo/:item", (req,res)=> {
        // deleting the requested item
        console.log("Delete function fired");
        Todo.find({item: req.params.item.replace(/\-/g,' ')}).remove((err,data)=>{
            if(err) throw err;
            res.json(data); // passing the data returned from the collection 'data' 
        })
    });


};