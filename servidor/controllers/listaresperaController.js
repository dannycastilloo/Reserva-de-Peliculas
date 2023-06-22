const Peliculas = require("../models/Peliculas");

exports.crearListarespera = async (req, res) => {
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

exports.actualizarListarespera = async (req, res) => {

    try {

        const {_id, numeroCinta, socio } = new Peliculas(req.body);
        let listar = await Listarespera.findById(req.params.id);

        if(!listar){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        peliculas._id = _id;
        listar.numeroCinta = numeroCinta;
        listar.socio = socio;
       

        console.log(listar)

        pelicula = await Listarespera.findOneAndUpdate({ _id: req.params.id }, listar, { new: true } );
        res.json(listar);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verListarespera = async (req, res) => {

    try {

        let listar = await Listarespera.findById(req.params.id);

        if(!listar){
            res.status(404).json({ msg: 'No existe en la lista de espera'});
        }

        res.json(listar);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarListarespera = async (req, res) => {

    try {

        let listar = await Listarespera.findById(req.params.id);

        if(!listar){
            res.status(404).json({ msg: 'No existe el peliculas'});
        }

        listar = await Listarespera.findOneAndRemove(req.params.id);

        res.json({ msg: 'El peliculaso: ' + listar.listarespera + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

