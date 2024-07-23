const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
},
    contactoPrincipal: { 
        type: String, 
        required: true 
},
    telefono: { 
        type: String, 
        required: true 
},
    correoElectronico: { 
        type: String, 
        required: true 
    },
    
},{versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);

