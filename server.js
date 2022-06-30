const express = require('express')
const formidable = require('express-formidable')

const app = express()

app.use(express.json())
app.use(formidable())

const responseObj = {

}


const db = {

}


app.post('/login', (req, res) => {
    for(let key in db) {
        if(req.fields.userName in db && req.fields.userPassword === db[key].password) {
            responseObj.message = `Welcome, ${req.fields.userName}!`
        } else {
            responseObj.message = 'invalid login or password!'
        }
        console.log(db[key].password)
        console.log(key)
    }

    // for(let key in db) {
    //     if(key !== req.fields.userName) {
    //         responseObj.message = `invalid login`
    //     } else if (db[key].password !== req.fields.userPassword) {
    //         responseObj.message = `invalid password`
    //     } else {
    //         responseObj.message = `Welcome, ${req.fields.userName}`
    //     }
    //     console.log(key.password)
    // }

    res.json(responseObj)
})

app.post('/signUp', (req, res) => {
    db[req.fields.userName] = {
        password: req.fields.userPassword,
        email: req.fields.userEmail
    }

    console.log(db)
    
    responseObj.message = `New user ${req.fields.userName} is created`

    res.json(responseObj)
})



app.use(express.static('static'))

app.listen(7000, () => {
    console.log('Server listens on 7000 port')
})

