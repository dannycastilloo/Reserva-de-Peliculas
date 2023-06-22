const jwt = require('jsonwebtoken');

const User = require("../models/Socio");
const config = require('../config/global');

exports.crearSocio = async (req, res) => {
    //const { username, email, password } = req.body;
    //console.log(username, email, password)
    //console.log(user)

    try {
        
        const { codigo,nombre, username, email, password,direccion, telefono } = req.body;
        const user = new User(
            {
                codigo:Number,
                nombre: String,
                email: String,
                password: String,
                direccion: String,
                telefono: Number
                
            } 
         );

        
        socio.password = await socio.encryptPassword(socio.password)
        await socio.save();

        const token = jwt.sign({id: socio._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        //res.json({message: 'Received'})
        res.json({auth: true, token})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSocio = async (req, res) => {

    const { email, password } = req.body;
    console.log(email, password)

    /*try {
        const { email, password } = req.body;
        const user = await User.findOne({email: email});
        
        if(!user){
            return res.status(404).send("The user doesn't exists");
        }

        const validPassword = await user.validatePassword(password);

        if(!validPassword){
            return res.status(401).json({auth: false, token: null});
        }

        const token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        
        res.json({auth: true, token});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }*/

}