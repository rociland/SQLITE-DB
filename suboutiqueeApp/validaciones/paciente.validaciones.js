//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const minDNI = 8
const maxDNI = 10

const esPacienteValido = ( body ) => { 
    const schema = joi.object({
        ID_Paciente         : joi.number().integer(),
        Documento           : joi.string().alphanum().min(minDNI).max(maxDNI),
        Tipo_documento      : joi.string(),
        Nombre              : joi.string(),
        Apellido            : joi.string(),
        ID_Barrio           : joi.number().integer(),
        Telefono            : joi.number().integer(),
        Correo              : joi.string(),
        Fecha_Nacimiento    : joi.date(),
        ID_LoginPaciente    : joi.number().integer(),
        ID_Antecedente      : joi.number().integer()
    });

    const result = schema.validate(body);
    
    if(result.error){
        console.log(result.error.details[0].message)
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esPacienteValido
}