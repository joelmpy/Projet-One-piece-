const express = require('express')
const app = express()
const PORT = process.env.PORT || 8001
const mongoose = require('mongoose')
const cors = require('cors')
const routeur = require('./routes/route')
const path = require('path')

// use //
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', routeur)

// mongoose connection //
const mongoDB = "mongodb://127.0.0.1:27017/OnePiece"
mongoose.connect(mongoDB)

app.use('/', routeur)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(PORT, err => {
    if(err){
       return console.log('ERROR', err)
    }
    console.log(`Listen my port ${PORT}`)
})