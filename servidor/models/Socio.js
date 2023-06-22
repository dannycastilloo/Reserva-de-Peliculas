//const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const socioSchema = new Schema({
    codigo:Number,
    nombre: String,
    email: String,
    password: String,
    direccion: String,
    telefono: Number
});

socioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
};

socioSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model('Socio', socioSchema)