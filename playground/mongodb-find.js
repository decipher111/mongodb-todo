const {MongoClient, ObjectID} = require("mongodb")

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) => {
    if(err){
        return console.log("unable to connect to Mongo Database")
    }
    console.log("connect to the database")
    const db = client.db("TodoApp")

    // console.log(db.collection('users').find())

    // db.collection('Todos').find({completed:true}).toArray().then((docs) => {   
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err) => {
    //     console.log("unable to fetch todos", err)
    // })

    db.collection('users').find({name:"Raghav"}).toArray().then((data) => {
        console.log(data)
    },(err) => {
        console.log(err)
    })

    // client.close()
})