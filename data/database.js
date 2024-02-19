const mongoose = require('mongoose');
const validator = require('validator')
const authschema = new mongoose.Schema({


Name:{
    type: String,
    required:true

},

Email:{
    type: String,
    required:true,
    unique:true,
    validate: [validator.isEmail,'Sorry Email Not Valid']
},

Password:{
    type: String,
    required:true
    
},
confirmPassword:{
    type: String,
    required:true
    

},
Height:{
    type: String,
    required:true,
},
Lenght:{
    type: String,
    required:true
},


})


module.exports = mongoose.model('auth',authschema);