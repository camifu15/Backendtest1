const Tarea = require('../models/Tarea');

//function para agregar tareas

exports.agregarTareas = async (req,res) =>{

    try {

        let tareas = new Tarea(req.body)
        await tareas.save();
        res.json(tareas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al agregar una tarea');
    }
}

//Funcion para mostrar  tareas

exports.mostrarTareas = async (req,res) => {

    try {

        const tareas = await Tarea.find();
        res.json(tareas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al mostrar las tareas');
    }
}

//Mostrar una tarea especifica por id

exports.mostrarUnaTarea = async(req,res) => {
    try {
        let tareas = await Tarea.findById(req.params.id);
        if(!tareas){
            res.status(404).send({msg: "No se encuentra la tarea con ese ID"});
            return
        }
        res.json(tareas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al buscar una tarea en la BD');
        
    }
}


//Actualizar tareas

exports.actualizarTareas = async (req, res) => {

    try {

        const tareas = await Tarea.findOneAndUpdate(
            {_id: req.params.id}, req.body);
        
        if(!tareas){
            res.status(500).send("hay un error al consultar la tarea");
        }else{
            res.json(tareas);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al actualizar una tarea');
    }
}

//Funcion para eliminar una tarea

exports.eliminarTarea = async(req,res) => {
    try {
        let tareas = await Tarea.findById(req.params.id);
        if(!tareas){
            res.status(404).json({msg:"La tarea no existe"})
            return
        }
        await Tarea.findOneAndDelete({_id: req.params.id});
        res.json({msg: "La tarea ha sido eliminada"});
        return

    } catch (error) {
        console.log(error);
        res.status(500).send('Hay un error al eliminar una tarea');
        
    }
}

