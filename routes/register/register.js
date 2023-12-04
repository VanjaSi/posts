const {Router} = require('express')
const validateInputs = require('../../middlewares/validateInputs')
const router = Router()

router.get('/', (req,res) => res.render('registerPage'))

router.post('/', validateInputs, require('../../controllers/register/registerUser'))

module.exports = router