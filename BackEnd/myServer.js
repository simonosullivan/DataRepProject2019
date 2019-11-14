// imports
const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connection to database 
const mongoDB = 'mongodb+srv://admin:admin@cluster0-kv7zb.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true });

// used to get around cors error : 
const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// so can access my server

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    headingNote: String,
    bodyNote: [String]
});

const NotesModel = mongoose.model('notes', notesSchema);

app.post('/api/notes', (req, res) => {
    console.log(req.body);

    NotesModel.create({
        headingNote: req.body.headingNote,
        bodyNote: req.body.bodyNote
    });

    res.json('Data Uploaded');
})

app.get('/api/notes', (req, res) => {

    NotesModel.find((error, data)=>{
        res.json({notes:data});
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
