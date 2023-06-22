const mongoose = require('mongoose');

const listaresperaSchema = mongoose.Schema({
    
    numeroCinta: {
        type: Number,
        require: true
    },
    socio: {
        type: String,
        require: true
    }
   
});

module.exports = mongoose.model('lista de espera', listaresperaSchema)