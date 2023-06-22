const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());


app.use('/api/peliculas', require('./routes/peliculas'));
app.use('/api/listarespera', require('./routes/listarespera'));
app.use('/api/login', require('./routes/socio'));
app.use('/api/create-user', require('./routes/socio'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})