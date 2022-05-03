const express = require('express');

const router = express.Router();

const resource = 'pacientes'

const route = `/${resource}`

var pacienteController = require('../../controllers/paciente.controllers')

// CONSULTAR
router.get( route, pacienteController.getAll ) 

router.get( `${route}/buscar/:dni`, pacienteController.getPacientePorDni )

router.get( `${route}/buscar/apellido/:apellido`, pacienteController.getPacientePorApellido )

router.get( `${route}/buscar/:apellido/:nombre`, pacienteController.getPacientePorNyA )


//CREAR
router.post( `${route}/crear`, pacienteController.addPaciente )

// ACTUALIZAR
router.put( `${route}/modificar/:id`, pacienteController.updatePaciente ) //modifica un paciente

//BORRAR
router.delete( `${route}/borrar/:dni`, pacienteController.deletePacientePorDni )


module.exports = router;