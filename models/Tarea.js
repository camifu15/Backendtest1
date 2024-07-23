const mongoose = require('mongoose');

//el modelo que se monta aca debe ser el mismo en la base de datos
const tareaSchema = mongoose.Schema({

nombre:{
    type: String,
    required: true    
},

responsable:{
    type: String,
    required: true
},

fecha:{
    type: String,
    required: true
},
comentarios:{
    type: String,
    required: true
},

},{versionkey:false});

module.exports = mongoose.model('Tarea', tareaSchema);