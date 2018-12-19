const {MongoClient, ObjectID} = require("mongodb")

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) => {
    if(err){
        return console.log("unable to connect to Mongo Database")
    }
    console.log("connected to the database")
    const db = client.db("TodoApp")

    //delete one
    // db.collection('Todos').deleteOne({todo:'eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    //delete many
    // db.collection('Todos').deleteMany({todo:'eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Todos').findOneAndDelete({todo:'eat lunch'}).then((result) => {
    //     console.log(result)
    // })


    // db.collection('users').findOneAndDelete({_id:new ObjectID("5c1a04ed80e1fc0b8bad2723")}).then((result) => {
    //     console.log(result)
    // })

    

    client.close()
})