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
const PORT = 3001;


//Middleware to parse JSON
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Get route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//get route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

//get route for /api/notes to read db.json and return all saved notes
app.get('/api/notes', (req, res) => {
    console.info(`${req.method} received to view notes`)
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
})

//Get route for *
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//listening on port
app.listen(PORT, () =>
console.log(`app listening at http://localhost:${PORT}`))