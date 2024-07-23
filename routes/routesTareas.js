const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareaController');

//rutas de nuestro crud tarea

router.post('/', tareasController.agregarTareas);
router.get('/', tareasController.mostrarTareas);
router.get('/:id', tareasController.mostrarUnaTarea);
router.put('/:id', tareasController.actualizarTareas);
router.delete('/:id', tareasController.eliminarTarea);

module.exports = router; 