const Peliculas = require("../models/");

exports.crearGenero = async (req, res) => {
    try {
        const listarespera = new Listarespera(req.body);

        await listarespera.save();
        res.send(listarespera);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerListarespera = async (req, res) => {

    try {

        const listarespera = await Listarespera.find();
        res.json(listarespera);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}







