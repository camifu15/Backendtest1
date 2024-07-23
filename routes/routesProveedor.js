const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

//Rutas de nuestro crud proveedor

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.mostrarProveedores);
router.get('/:id', proveedorController.mostrarUnProveedor);
router.put('/:id', proveedorController.actualizarProveedores);
router.delete('/:id', proveedorController.eliminarProveedor);


module.exports = router;