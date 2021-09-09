const express = require('express')
const app = express()
const path = require('path')
const notesDB = require('./db/db.json')
const fs = require ('fs')
const util = require('util')
const { readFromFile,
        readAndAppend,
        writeToFile, } = require ('./helpers/fsUtils')
const uuId = require('./helpers/uuid')
const PORT = process.env.port || 3001;


//Middleware to parse JSON
app.use(express.json)
app.use(express.static('public'))

//Get route for homepage
app.get('/', (req, res) => {
    console.info(`${req.method} received`)
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//Get route for *
app.get('*', (req, res) => {
    console.info(`${req.method} received`)
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//get route for notes page
app.get('/notes', (req, res) => {
    console.info(`${req.method} received`)
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})