const mongoose = require('mongoose');

const GeneroSchema = mongoose.Schema({
    
    terror: {
        type: String,
        require: true
    },
    accion: {
        type: String,
        require: true
    },
    comedia: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Genero', GeneroSchema)