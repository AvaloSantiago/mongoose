const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
artistas: [String],
cantidadCanciones: String,
genero: String,
duracion: String,
fechaLanzamiento: Date,
nombreAlbum: String,
});

const album = mongoose.model('Albumes', albumSchema)

module.exports = album;