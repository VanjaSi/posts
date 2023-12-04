const { afterMain } = require('@popperjs/core')
const {Router}=require('express')
const router = Router()


router.get('/', (req,res)=>{

    res.render('homePage')
})
router.use('/register', require('./register/register'))

router.use('/login', require('./login/login'))

router.use('/posts', require('./posts/posts'))



module.exports = router