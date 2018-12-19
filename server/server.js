const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose.js')
const {User} = require('./models/user.js')
const {Todo} = require('./models/todo.js')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) 

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((data) => {
        res.send(data)
    },(err) => {
        res.status(400).send(err)
    })
})

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    },(err) => {
        res.status(400).send(err)
    })
})

app.listen(3000,() => {
    console.log("server started on port 3000")
})



