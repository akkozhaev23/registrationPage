const { response } = require('express')
const express = require('express')
const formidable = require('express-formidable')

const app = express()

app.use(express.json())
app.use(formidable())

const db = {

}



app.post('/login', (req, res) => {
    console.log(req.fields)
    db[req.fields.userName] = {
        password: req.fields.userPassword,
        email: req.fields.userEmail
    }
})

app.post('/signUp', (req, res) => {
    db[req.fields.userName] = {
        password: req.fields.userPassword,
        email: req.fields.userEmail
    }

    const responseObj = {

    }
    
    responseObj.message = `New user ${req.fields.userName} is created`

    res.json(responseObj)
})

app.use(express.static('static'))

app.listen(7000, () => {
    console.log('Server listens on 7000 port')
})

