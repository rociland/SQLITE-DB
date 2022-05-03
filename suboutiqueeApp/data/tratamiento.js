const db = require('../src/base.js')

async function getAll() { //TRAE TODOS LOS REGISTROS DE LA TABLA 'TRATAMIENTOS'
    const sql = 'SELECT * FROM TRATAMIENTOS';
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });

    //INCLUIR VALIDACION

    /*if( !responseDB ){
        throw new Error('No se encontro registros en la tabla de tratamiento.')
    }*/

    return responseDB
}

async function getTratamientoPorCodigo( codigo ) { //MUESTRA TRATAMIENTO POR CODIGO
    const sql = 'SELECT * FROM TRATAMIENTOS WHERE ID_Tratamiento = ' + codigo
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });

    //INCLUIR VALIDACION

    /*if( !responseDB ){
        throw new Error(`No se encontro tratamiento con el codigo ${codigo}.`)
    }*/

    return responseDB
}

async function getTratamientoPorNombre( nombre ) { //TRAE TRATAMIENTOS POR NOMBRE
    const sql = 'SELECT * FROM TRATAMIENTOS WHERE Descripcion = ' + nombre 
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });
    
    //INCLUIR VALIDACION

    /*if( responseDB.length === 0 ){
        throw new Error(`No se encontro tratamiento/s con el nombre ${nombre}.`)
    }*/

    return responseDB
}


async function updateTratamiento( body, id) { //MODIFICAR TRATAMIENTO
    var updateQuery = 'UPDATE TRATAMIENTOS SET '            +
    '   Descripcion = "'            + body.Descripcion      + 
    '", Duracion    = "'            + body.Duracion         +
    '"  WHERE ID_Tratamiento = "'   + id                    +  '"'


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

    //INCLUIR VALIDACION

    return updateData(updateQuery)
}
    
async function addTratamiento( body ) { //Agregar tratamiento
    var insertQuery = 'INSERT INTO TRATAMIENTOS(ID_Tratamiento, Descripcion, Duracion)' + 
    'VALUES ('      + body.ID_Tratamiento    + 
            ',"'     + body.Descripcion      +
            '",'     + body.Duracion         +  ')'

     const insertData = (Query) => {
         return new Promise((resolve, reject) => {
         db.run(Query, (err) => {
            if (err) {
                reject(err);
            }
                resolve("TRATAMIENTO DADO DE ALTA");
            });
        });
    };
    
    //INCLUIR VALIDACION

    return insertData(insertQuery);
}

async function deleteTratamientoPorCodigo( id ) { //dar de baja un tratamiento por su codigo 
    const deleteQuery = 'DELETE FROM TRATAMIENTOS WHERE ID_Tratamiento = "'+ id + '"'
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

    //INCLUIR VALIDACION
    
    return deleteData(deleteQuery)
}


module.exports = {
    getAll,
    getTratamientoPorCodigo,
    getTratamientoPorNombre,
    updateTratamiento,
    addTratamiento,
    deleteTratamientoPorCodigo
}
