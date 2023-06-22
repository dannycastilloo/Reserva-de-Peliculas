const mongoose = require('mongoose');

const peliculasSchema = mongoose.Schema({
    
    titulo: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    actores: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Peliculas', peliculasSchema)