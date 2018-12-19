const {MongoClient, ObjectID} = require("mongodb")

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) => {
    if(err){
        return console.log("unable to connect to Mongo Database")
    }
    console.log("connected to the database")
    const db = client.db("TodoApp")

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5c1a04f17744050b8cce40cb')
    }, {
        $set : {
            name:'raghav'
        },
        $inc :{
            age: 1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result)
    })
    

    client.close()
})