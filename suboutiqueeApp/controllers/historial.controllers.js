const historialService = require('../services/historial.service')
const { estaAutenticado } = require('../validaciones/ingreso.validacion')
const er = `Necesita estar logeado para poder realizar la accion requerida`;

const getHistorialDelPAciente =  async ( req, res ) => { //obtener historial por ID
    try {
        if(estaAutenticado(req)){
            const result = await historialService.getHistorialDelPAciente(req.params);
            res.status(200).send(result); 
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const actualizarHistorialClinico = async ( req, res ) => { // Actualizar datos del paciente
    try {
        if(estaAutenticado(req)){
            const result = await historialService.actualizarHistorialClinico(req.body, req.params);
            res.status(200).send(result); 
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
    
}

const agregarHistorial = async ( req, res ) => { //Crear historial
    try {
        if(estaAutenticado(req)){
            const result = await historialService.agregarHistorial(req.body)
            res.status(200).send(result); 
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const borrarHistorialclinico = async ( req, res ) => { //Eliminar historial

    try {
        if(estaAutenticado(req)){
            const result = await historialService.borrarHistorialclinico(req.params)
            res.status(200).send(result); 
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getHistorialDelPAciente,
    agregarHistorial,
    actualizarHistorialClinico,
    borrarHistorialclinico
}