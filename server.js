const express = require('express')
const session = require('express-session')
const mongoose = 
require('mongoose')
const path = require('path')
const { SESSION_CONFIG } = require('./config/config')

const app = express()

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')))
app.use(session(SESSION_CONFIG))
app.use('/', require('./routes'))

const run = async()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongo_vezba")
        console.log("MongoDB connected")
        app.listen(3000,()=>{
            console.log('Server running...')
        })
    } catch (error) {
        console.log(error)
    }

    
}

run()