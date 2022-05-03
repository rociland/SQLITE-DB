const pacienteService = require('../services/paciente.service')
const { estaAutenticado } = require('../validaciones/ingreso.validacion')
const er = `Necesita estar logeado para poder realizar la accion requerida`;

const getAll =  async ( req, res ) => {  //Obtener todos los pacientes
    try {
        if(estaAutenticado(req)){
            const result = await pacienteService.getAll();
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorDni = async ( req, res ) => {  //Obtener un paciente por dni
    try {
        if(estaAutenticado(req)){
            const result = await pacienteService.getPacientePorDni(req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorApellido = async ( req, res ) => {  //Obtener un paciente por apellido
    try {
        if(estaAutenticado(req)){
            const result = await pacienteService.getPacientePorApellido(req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getPacientePorNyA = async ( req, res ) => {  //Obtener un paciente por apellido y nombre
    try {
        if(estaAutenticado(req)){
            const result = await pacienteService.getPacientePorNyA(req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const updatePaciente = async ( req, res ) => { // Actualizar datos del paciente
    try {
        if(estaAutenticado(req)){
            const result = await pacienteService.updatePaciente(req.body, req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const addPaciente = async ( req, res ) => { //Crear paciente
    try {
        console.log("en crear paciente...")
        if(estaAutenticado(req)){
            const result = await pacienteService.addPaciente(req.body)
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const deletePacientePorDni = async ( req, res ) => { //Eliminar paciente
    try {
        if(estaAutenticado(req)){
            const result = await pacienteService.deletePacientePorDni(req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getAll,
    getPacientePorDni,
    getPacientePorApellido,
    getPacientePorNyA,
    updatePaciente,
    addPaciente,
    deletePacientePorDni
}