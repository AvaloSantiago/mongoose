const express = require("express")
const app = express()
const port = 7777
const mongoose = require("mongoose")

const user = 'santiavalo1'
const password = 'm17NEu5GXhfXtmFN'

const dbname = 'Albumes'
const uri = `mongodb+srv://${user}:${password}@cluster0.xxicmdg.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const Album = require('./models/album');

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('conectao');
        return Album.findOne({nombreAlbum: {$regex: /Post\s*Mortem/i}});
    })
    .then((docs) => {
        console.log(docs)    })
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
});