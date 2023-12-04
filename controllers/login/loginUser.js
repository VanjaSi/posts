const UserModel = require("../../models/UserModel")
const bcrypt = require('bcryptjs')

const loginUser = async (req,res,next)=>{

const{email,password}= req.body

    try {
        const isUserFound = await UserModel.findOne({email})
        // console.log(isUserFound)
        if(!isUserFound) {
            next(new Error('Eser with this email is not registered'))
            res.redirect('/register')
           
        }
        //compare passwords
       const isMatch = await bcrypt.compare(password, isUserFound.password)
        if(!isMatch) return next('Password is incorrect')

        // USER IS LOGED IN
        console.log('logggggggeeeedddd')

        req.session.user={
            firstName: isUserFound.firstName,
            lastName :isUserFound.lastName,
            image: isUserFound.image,
            role: isUserFound.role,
            _id: isUserFound._id
        }
       res.redirect('/posts')
    } catch (error) {
        console.log("Login error", error)
        next(error)
    }
    res.send(req.body)

}
module.exports = loginUser