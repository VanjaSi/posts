
const UserModel = require('../../models/UserModel')
const bcrypt = require('bcryptjs')
const SALT = 10

const registerUser = async (req,res,next)=>{

    const {email, password, confirmPassword, firstName,lastName} = req.body
    
    // compare passwords
    if(password !== confirmPassword){
      next(new Error('Passwords need to match'))
    }
  
   
    try {
        //see if user already exists in "USERS" collection
        const isRegistered = await UserModel.findOne({email})  
        if(isRegistered) next(new Error('User with this email already exists!'))
        // hash password
       const hashedPass = await bcrypt.hash(password, SALT)
        //save user to database
        const newUser = new UserModel({firstName,lastName,email, password:hashedPass})
        const savedUser = await newUser.save()
        console.log(savedUser)
        res.redirect('/login')

    } catch (error) {
        console.log('REGISTRATION ERROR', error)
        next(error)
    }

}
module.exports = registerUser