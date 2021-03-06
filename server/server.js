const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const {mongoose} = require('./db/mongoose.js')
const {User} = require('./models/user.js')
const {Todo} = require('./models/todo.js')
const {ObjectID} = require('mongodb')
const {authenticate} = require('./middlewares/authenticate')

var app = express();
const port = process.env.PORT || 3000

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
            return res.status(404).send()
        }
        res.send({data})
    }).catch((err) => {
        console.status(400).send()
    })
})

app.delete('/todos/:id',(req,res) => {
    id = req.params.id

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findByIdAndDelete(id).then((data) => {
        if(!data){
            return res.status(404).send()
        }
        res.send({data})
    }).catch((err) => {
        console.status(400).send()
    })
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body}, {new:true}).then((todo) => {
        if (!todo) {
          return res.status(404).send();
        }
        res.send({todo});
      }).catch((e) => {
        res.status(400).send();
      })
})

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
  
    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });

app.get('/users/me', authenticate, (req,res) => {
    res.send(req.user)
})

 
app.listen(port,() => {
    console.log(`server started on port ${port}`)
})



