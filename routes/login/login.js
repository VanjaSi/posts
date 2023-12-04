const {Router} = require ('express')
const router = Router()

router.get('/', (req,res)=>res.render('loginPage'))
router.post('/', require('../../controllers/login/loginUser.js'))

module.exports = router