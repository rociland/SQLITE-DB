//Lo que llamamos paciente sera el cliente 

var historialController = require('../../controllers/historial.controllers')

const express = require('express');

const router = express.Router();

const resource = 'historial'

const route = `/${resource}`


// CONSULTAR

router.get( `${route}/buscar/:id`, historialController.getHistorialDelPAciente )


// ACTUALIZAR
router.put( `${route}/modificar/:id`, historialController.actualizarHistorialClinico ) //modifica un paciente


//CREAR
router.post( `${route}/crear`, historialController.agregarHistorial )


//BORRAR
router.delete( `${route}/borrar/:id`, historialController.borrarHistorialclinico )


module.exports = router;