const Proveedor = require('../models/Proveedor');

//Funcion para agregar proveedores

exports.agregarProveedores = async (req, res) =>{

    try {
        let proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.json(proveedor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al agregar un proveedor');
    }
}

//Funcion para mostrar proveedores

exports.mostrarProveedores = async (req,res) => {

    try {
        const proveedor = await Proveedor.find();
        res.json(proveedor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al mostrar los proveedores');
        
    }
}

//Mostrar un proveedor especifico por id

exports.mostrarUnProveedor = async(req,res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).send({msg: "No se encuentra el proveedor con ese ID"});
            return
        }
        res.json(proveedor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al buscar un proveedor en la BD');
        
    }
}

//Actualizar proveedores

exports.actualizarProveedores = async (req,res) => {

    try {

        const proveedor = await Proveedor.findOneAndUpdate(
            {_id:req.params.id}, req.body);
        if(!proveedor){
            res.status(500).send("Hay un error al consultar el proveedor");
        }else{
            res.json(proveedor);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al actualizar un proveedor');
    }
}

//Funcion para eliminar un proveedor

exports.eliminarProveedor = async(req,res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:"El proveedor no existe"})
            return
        }
        await Proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El proveedor ha sido eliminado"});
        return

    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al eliminar un proveedor');
        
    }
}