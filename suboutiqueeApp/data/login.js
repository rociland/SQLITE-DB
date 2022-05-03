const db = require('../src/base.js')

async function findByCredentials(usuario, password){
    const sql = 'SELECT * FROM LOGIN WHERE usuario = "' + usuario + '" AND contrasenia = "' + password + '"';
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            else{
                resolve(rows);
            }
         });
    });

    //INCLUIR VALIDACION EN CASO DE INGRESAR MAL LAS CREDENCIALES

   /* if(!responseDB){
        throw new Error(`No existe el usuario ${ usuario }`);
    }

    if(responseDB.password !== password){
        throw new Error('La contraseña ingresada es incorrecta.');
    }*/

    return responseDB;
}

module.exports = { findByCredentials }