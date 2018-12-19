const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose.js')
const {user} = require('./models/user.js')
const {todo} = require('./models/todo.js')

mongoose.Promise = global.Promise

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) 

var todo = new todo()// being called a todo constructor

app.post('/todos', (req,res) => {
    var todo = new todo({ //throws error constructor not defined
        text: req.body.text
    })

    todo.save().then((data) => {
        res.send(data)
    },(err) => {
        res.status(400).send(err)
    })
})

app.listen(3000,() => {
    console.log("server started on port 3000")
})



