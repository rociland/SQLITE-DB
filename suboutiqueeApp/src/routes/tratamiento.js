
var tratamientoController = require('../../controllers/tratamiento.controllers');

const express = require('express');

const router = express.Router();

const resource = 'tratamiento'

const route = `/${resource}`


// CONSULTAR
router.get( route, tratamientoController.getAll )

router.get( `${route}/buscar/:codigo`, tratamientoController.getTratamientoPorCodigo )

router.get( `${route}/buscar/nombre/:nombre`, tratamientoController.getTratamientoPorNombre)

// ACTUALIZAR
router.put( `${route}/modificar/:id`, tratamientoController.updateTratamiento ) 

// CREAR
router.post( `${route}/crear`, tratamientoController.addTratamiento )

// BORRAR
router.delete( `${route}/borrar/:id`, tratamientoController.deleteTratamientoPorCodigo )


module.exports = router;