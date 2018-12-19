const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds037252.mlab.com:37252/todoapp' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } )

module.exports = {
    mongoose
}