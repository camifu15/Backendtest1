const mongoose = require('mongoose');
require('dotenv').config();

//conexion de mongoDB

const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(()=> console.log('Estamos conectados con mongodb'))
    .catch((err)=> console.error(err));
}

module.exports = conectarBD;