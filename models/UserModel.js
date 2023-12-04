const {Schema, model} = require('mongoose')
const { USER_AVATAR} = require ('../config/config')

const UserSchema = new Schema({

    firstName: {type:String, required:[true, 'First name is required']},
    lastName:{ type: String, required:[true,'Last name is required']},
    email:{type:String, required:[true, 'Email is required']},
    password:{type: String, required: [true, 'Password is required']},
    image: {type:String, default: USER_AVATAR},
    gender:{type:String, default:null},
    birthdate:{type:Date, default:null},
    role:{type:String, default:'user'},
    createdAt : {type: Date, default: ()=> new Date().getUTCDate()},
    updatedAt:{type:Date, default:null},
    activate:{type:Boolean, default: false}
})

module.exports = model('Users', UserSchema)