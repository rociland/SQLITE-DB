//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const esTratamientoValido = ( body ) => { 
    const schema = joi.object({
        ID_Tratamiento   : joi.number().integer(),
        Descripcion      : joi.string().required(),
        Duracion         : joi.number().integer().required()
    });

    const result = schema.validate(body);
    if(result.error){
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esTratamientoValido
}