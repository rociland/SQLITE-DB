const tratamientoService = require('../services/tratamiento.service')
const { estaAutenticado } = require('../validaciones/ingreso.validacion')
const er = `Necesita estar logeado para poder realizar la accion requerida`;

const getAll =  async ( req, res ) => {  //Obtener todos los tratamientos
    try {
        if(estaAutenticado(req)){
            const result = await tratamientoService.getAll();
            res.status(200).send(result);    
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTratamientoPorCodigo = async ( req, res ) => {  //Obtener tratamiento por código
    try {
        if(estaAutenticado(req)){
            const result = await tratamientoService.getTratamientoPorCodigo(req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTratamientoPorNombre = async ( req, res ) => {  //Obtener tratamiento por nombre
    try {
        if(estaAutenticado(req)){
            const result = await tratamientoService.getTratamientoPorNombre(req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}


const updateTratamiento = async ( req, res ) => { // Actualizar datos del tratamiento
    try {
        if(estaAutenticado(req)){
            const result = await tratamientoService.updateTratamiento( req.body, req.params);
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const addTratamiento = async ( req, res ) => { //Crear tratamiento
    const body = req.body
    try {
        if(estaAutenticado(req)){
            const result = await tratamientoService.addTratamiento(body)
            res.status(200).send(result);
        }else{
            res.status(401).send({ error: er});
        }
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const deleteTratamientoPorCodigo = async ( req, res ) => { //Eliminar tratamiento por codigo
    try {
        if(estaAutenticado(req)){
            const result = await tratamientoService.deleteTratamientoPorCodigo(req.params);
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
    getTratamientoPorCodigo,
    getTratamientoPorNombre,
    updateTratamiento,
    addTratamiento,
    deleteTratamientoPorCodigo
}