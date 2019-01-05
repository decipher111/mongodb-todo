const{SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs')

var password = 'abc123'

bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(password, salt, (err,hash) => {
        console.log(hash)
    })
})

var hashedPassword = '$2a$10$ztrxfsK0IKhl/cTtQq3IO.zgXQdrZ9I4v8Ql3bus7e8mE47Dtubg2';

bcrypt.compare('abc123', hashedPassword, (err,res) => {
    console.log(res)
})



// var x = 'I am user number 3'
// console.log(SHA256(x).toString())

// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+"salt").toString()
// }


// var resulthash = SHA256(JSON.stringify(token.data)+"salt").toString()

// if(token.hash === resulthash){
//     console.log('data not manipulated')
// }
// else{
//     console.log('data was manipulated')
// }