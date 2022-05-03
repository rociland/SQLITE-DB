//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const esHistorialValido = ( body ) => { 
    const schema = joi.object({
        ID_Antecedente          : joi.number().integer(),
        Biotipo                 : joi.string(),
        Fototipo                : joi.string(),
        Afeccion_Cutanea        : joi.string(),
        Alergias                : joi.string(), 
        Medicamentos            : joi.string(),
        Tratamientos_Clinicos   : joi.string(),
    });

    const result = schema.validate(body);
    
    if(result.error){
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esHistorialValido
}