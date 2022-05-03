const tratamientoRepository = require('../data/tratamiento')
const {esTratamientoValido} = require('../validaciones/tratamiento.validaciones')

module.exports = {  

    getAll : () => {
        return tratamientoRepository.getAll()
    },

    getTratamientoPorCodigo : ( params ) => {

        if( !params.codigo ){
            throw new Error('Se requiere el ingreso del codigo para realizar la consulta del tratamiento.');
        }

        return tratamientoRepository.getTratamientoPorCodigo(params.codigo)
    },

    getTratamientoPorNombre : ( params ) => {

        if( !params.nombre ){
            throw new Error('Se requiere el ingreso del nombre para realizar la consulta del tratamiento.');
        }

        return tratamientoRepository.getTratamientoPorNombre(params.nombre)
    },
    
   
    updateTratamiento : ( body, params ) => {
        if(!esTratamientoValido(body))
            throw new Error("El tratamiento ingresado no es valido")
        return tratamientoRepository.updateTratamiento( body, params.id )
    },

    addTratamiento : ( body ) => {

        if(!esTratamientoValido(body))
            throw new Error("El tratamiento ingresado no es valido")

        return tratamientoRepository.addTratamiento(body)
    },

    deleteTratamientoPorCodigo : ( params ) => {

        if( !params.id ){
            throw new Error('Se debe ingresar el id para poder eliminar el tratamiento');
        }

        return tratamientoRepository.deleteTratamientoPorCodigo(params.id)
    }
    


};
