const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

// ObjectID.isValid(id)


Todo.findById('5c1a89ce62d7b911091dd49a').then((data) => {
    if(!data){
        return console.log("id not found")
    }
    console.log(data)
}).catch((err) => {
    console.log("id invalid") //catches error if id is invalid
})