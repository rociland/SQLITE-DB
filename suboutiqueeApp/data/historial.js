const db = require('../src/base.js')

async function getHistorialDelPAciente( id) { //Trae todos los datos de la tabla de 'ANTECEDENTES_CLINICOS'
    const sql = 'SELECT * FROM ANTECEDENTES_CLINICOS WHERE ID_Antecedente =  ' + id;
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });
    return responseDB
}

async function actualizarHistorialClinico( body, id ) { //MODIFICAR ANTECEDENTES
    var updateQuery = 'UPDATE ANTECEDENTES_CLINICOS SET '               +
    '   Biotipo = "'                   + body.Biotipo                   + 
    '", Fototipo = "'                  + body.Fototipo                  +
    '", Afeccion_Cutanea = "'          + body.Afeccion_Cutanea          +
    '", Alergias = "'                  + body.Alergias                  + 
    '", Medicamentos = "'              + body.Medicamentos              +
    '", Tratamientos_Clinicos = "'     + body.Tratamientos_Clinicos     +
    '"  WHERE ID_Antecedente = "'      + id                             +  '"'


    const updateData = (Query) => {
        return new Promise((resolve, reject) => {
            db.run(Query, (err) => {
                if (err) {
                    reject(err);
                }
                resolve("REGISTRO ACTUALIZADO");
            });
        });
    };

    return updateData(updateQuery)
}
    
async function agregarHistorial( body ) { // AGREGAR REGISTRO A LA TABLA 'HISTORIAL'
    var insertQuery = 'INSERT INTO ANTECEDENTES_CLINICOS(ID_Antecedente, Biotipo, Fototipo, Afeccion_Cutanea, Alergias, Medicamentos, Tratamientos_Clinicos)' + 
    'VALUES ('       + body.ID_Antecedente         + 
            ',"'     + body.Biotipo                +
            '","'    + body.Fototipo               +
            '","'    + body.Afeccion_Cutanea       +
            '","'    + body.Alergias               +
            '","'    + body.Medicamentos           +
            '","'    + body.Tratamientos_Clinicos  + '")'
            
    console.log(insertQuery)

    const insertData = (Query) => {
        return new Promise((resolve, reject) => {
            db.run(Query, (err) => {
                if (err) {
                    reject(err);
                }
                resolve("HISTORIAL DADO DE ALTA");
            });
        });
    };

    return insertData(insertQuery)
}

async function borrarHistorialclinico( id ) { //BORRAR REGISTRO DE LA TABLA 
    const deleteQuery = 'DELETE FROM ANTECEDENTES_CLINICOS WHERE ID_Antecedente = "'+ id + '"'
    const deleteData = (Query) => {
        return new Promise((resolve, reject) => {
            db.run(Query, (err) => {
                if (err) {
                    reject(err);
                }
                resolve("REGISTRO ELIMINADO");
            });
        });
    };

    return deleteData(deleteQuery)
}


module.exports = {
    getHistorialDelPAciente,
    agregarHistorial,
    actualizarHistorialClinico,
    borrarHistorialclinico
}