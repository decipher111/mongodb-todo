const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose.js')
const {User} = require('./models/user.js')
const {Todo} = require('./models/todo.js')
const {ObjectID} = require('mongodb')

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

app.get('/todos/:id',(req,res) => {
    id = req.params.id

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findById(id).then((data) => {
        if(!data){
            return res.status(404).send("id not found")
        }
        res.send({data})
    }).catch((err) => {
        console.status(400).send()
    })
})

app.listen(3000,() => {
    console.log("server started on port 3000")
})



