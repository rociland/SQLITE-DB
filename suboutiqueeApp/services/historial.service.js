const historialRepository = require('../data/historial')
const { esHistorialValido } = require('../validaciones/historial.validaciones')


module.exports = {  

    getHistorialDelPAciente : ( params ) => { // OBTENER HISTORIAL POR ID
        return historialRepository.getHistorialDelPAciente( params.id )
    },
   
    actualizarHistorialClinico : ( body, params ) => { // MODIFICAR ANTECEDENTES CLINICOS

        if(!esHistorialValido(body))
            throw new Error("El historial ingresado no es valido")

        return historialRepository.actualizarHistorialClinico(body, params.id)
    },

    agregarHistorial : ( body ) => { // CREAR ANTECEDENTES

        if(!esHistorialValido(body))
            throw new Error("El historial ingresado no es valido")

        return historialRepository.agregarHistorial(body)
    },

    borrarHistorialclinico : ( params ) => { //BORRAR ANTECEDENTES

        if( !params.id ){
             throw new Error('Error al consultar el id del registro');
       }
        return historialRepository.borrarHistorialclinico(params.id)
    }
    
};
