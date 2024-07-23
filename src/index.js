const express = require('express');
const conectarBD = require('../config/db')
const cors = require('cors');

//creamos nuestro servidor
const app = express();

//configurar el puerto
const port = process.env.PORT || 5000;

//Enlazamos la conexion de nuestra base de datos
conectarBD();
app.use(cors());
app.use(express.json());


//rutas de nuestro proyecto
app.use('/api/tareas',require('../routes/routesTareas'));
app.use('/api/proveedor', require('../routes/routesProveedor'));


//ruta para verificar el servidor en la web
app.get('/', (req,res) => {
    res.send("Hola mundo desde la web");
});

app.listen(port,()=>{
    console.log('El servidor esta conectado');
})