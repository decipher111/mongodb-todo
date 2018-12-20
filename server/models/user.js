const validator = require('validator')
const mongoose = require('mongoose')

var User = mongoose.model('User', {
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true,
        unique:true,
        validate: {
            validator:validator.isEmail,
            message:'{VALUE} is not an email'
        }
    },
    password: {
        type:String,
        require:true,
        minlength:6
    },
    token: {
        access:{
            type:String,
            require:true
        },
        token: {
            type:String,
            require:true
        }
    }
})

module.exports = {
    User
}