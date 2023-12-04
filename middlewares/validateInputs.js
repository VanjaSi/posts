
const validateInputs = (req,res,next) => {

    const user = {...req.body}
    const errors = []

    for (const key in user) {
    
        if(user[key] === ""){
            errors.push(key)
        }
        
    }

    if(errors.length > 0){
        console.log('All fields are required')
        return
    }
    
    next()
}

module.exports = validateInputs