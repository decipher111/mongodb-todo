const {MongoClient, ObjectID} = require("mongodb")

// var id = new ObjectID();
// console.log(id)


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) => {
    if(err){
        return console.log("unable to connect to Mongo Database")
    }
    console.log("connect to the database")
    const db = client.db("TodoApp")

    db.collection('Todos').insertOne({
        todo:"something",
        completed:"false"
    }, (err,result) => {
        if(err){
            return console.log("unbale to insert a document in the collection todos", err)
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })
    
    db.collection('users').insertOne({
        name:'Pranay',
        age:'19'
    },(err,result) => {
        if(err){
            return console.log("cannot insert document in collection users", err)
        }
        console.log(JSON.stringify(result.ops, undefined,2))
    })

    client.close()
})