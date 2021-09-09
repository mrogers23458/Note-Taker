const express = require('express')
const app = express()
const notesDB = require('./db/db.json')
const fs = require ('fs')
const util = require('util')
const { readFromFile,
        readAndAppend,
        writeToFile, } = require ('./helpers/fsUtils')
const uuId = require('./helpers/uuid')