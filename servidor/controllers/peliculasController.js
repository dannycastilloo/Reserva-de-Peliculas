const Peliculas = require("../models/Peliculas");

exports.crearPeliculas = async (req, res) => {
    try {
        const peliculas = new Peliculas(req.body);

        await peliculas.save();
        res.send(peliculas);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPeliculas = async (req, res) => {

    try {

        const peliculas = await Peliculas.find();
        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPeliculas = async (req, res) => {

    try {

        const {_id, titulo, genero, director, actores, fechaCreacion } = new Peliculas(req.body);
        let pelicula = await Peliculas.findById(req.params.id);

        if(!pelicula){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        peliculas._id = _id;
        pelicula.titulo = titulo;
        pelicula.genero = genero;
        pelicula.director = director;
        pelicula.actores = actores;
        pelicula.fechaCreacion = fechaCreacion;

        console.log(pelicula)

        pelicula = await Peliculas.findOneAndUpdate({ _id: req.params.id }, pelicula, { new: true } );
        res.json(pelicula);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPeliculas = async (req, res) => {

    try {

        let pelicula = await Peliculas.findById(req.params.id);

        if(!pelicula){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(pelicula);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPeliculas = async (req, res) => {

    try {

        let pelicula = await Peliculas.findById(req.params.id);

        if(!pelicula){
            res.status(404).json({ msg: 'No existe el peliculas'});
        }

        pelicula = await Peliculas.findOneAndRemove(req.params.id);

        res.json({ msg: 'El peliculaso: ' + pelicula.peliculas + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

