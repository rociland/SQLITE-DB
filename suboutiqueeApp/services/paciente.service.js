const pacienteRepository = require('../data/paciente')
const pacienteValido = require('../validaciones/paciente.validaciones')


module.exports = {  

    getAll : () => {
        return pacienteRepository.getAll();
    },
   
    getPacientePorDni : ( param ) => {

        if( !param.dni ){
            throw new Error('Se requiere el ingreso del dni para realizar la consulta del paciente.');
        }
 
        return pacienteRepository.getPacientePorDni(param.dni)
    },
    
    getPacientePorApellido : ( param ) => {

        if( !param.apellido ){
            throw new Error('Se requiere el ingreso del apellido para realizar la consulta del paciente.');
        }

        return pacienteRepository.getPacientePorApellido(param.apellido)
    },

    getPacientePorNyA : ( param ) => {

         if( !param.apellido && ! param.nombre ){
            throw new Error('Se requiere el ingreso del apellido o nombre para realizar la consulta del paciente.');
        }

        return pacienteRepository.getPacientePorNyA(param.nombre, param.apellido)
    },
    
    updatePaciente : ( body, params ) => {
        console.log(params.id)

        if(!params.id)
            throw new Error("Error al consultar el id del paciente")

        if(!pacienteValido.esPacienteValido(body))
            throw new Error("El paciente a modificar no es valido")

        return pacienteRepository.updatePaciente(body, params.id)
    },

    addPaciente : ( body ) => {
        if(!pacienteValido.esPacienteValido(body))
            throw new Error("El paciente ingresado no es valido")
        return pacienteRepository.addPaciente(body)
    },

    deletePacientePorDni : ( param ) => {
        if( !param.dni ){
             throw new Error('Se debe ingresar un dni para poder eliminar el paciente');
       }
        return pacienteRepository.deletePacientePorDni(param.dni)
    }
    
};
