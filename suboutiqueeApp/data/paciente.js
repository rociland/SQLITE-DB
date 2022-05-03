const db = require('../src/base.js')

async function getAll() { //TRAE TODOS LOS DATOS DE LA TABLA 'PACIENTES'
    const sql = 'SELECT * FROM PACIENTES';
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });

    //INCLUIR UN MSJ SI NO HAY REGISTROS CARGADOS
    
    /*if( !responseDB ){
        throw new Error('No se encontro registros en la tabla de pacientes.')
    }*/

    return responseDB 
}


async function getPacientePorID( id ) { //MUESTRA AL PACIENTE FILTRANDO POR ID
    const sql = 'SELECT * FROM PACIENTES WHERE ID_Paciente = ' + id
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

async function getPacientePorDni( documento ) { //TRAE UN PACIENTE FILTRANDO POR DOCUMENTO
    const sql = 'SELECT * FROM PACIENTES WHERE Documento = ' + documento
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });

    //INCLUIR UNA VALIDACION EN CASO DE NO TENER EL DNI REGISTRADO

   /* if(responseDB == null){
        throw new Error(`No se encontro un paciente con DNI ${dni} en el registro`)
    }*/

    return responseDB
}

async function getPacientePorApellido( apellido ) { //TRAE A UN PACIENTE BUSCANDO POR APELLIDO
    const sql = 'SELECT * FROM PACIENTES WHERE Apellido = ' + apellido
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });

    // INCLUIR VALIDACION EN CASO DE NO EXISTIR UN PACIENTE CON EL APELLIDO REGISTRADO

    /*if( responseDB.length === 0){
        throw new Error(`No se encontro un paciente con apellido ${apellido} en el registro`)
    }*/

    return responseDB
}

async function getPacientePorNyA( nombre, apellido ) { //TRAE UN PACIENTE BUSCADO POR NOMBRE Y APELLIDO
    const sql = 'SELECT * FROM PACIENTES WHERE Apellido = ' + apellido + "AND Nombre = " + nombre
    const responseDB = new Promise(function(resolve,reject){
        db.all(sql, function(err,rows){
           if(err){
               return reject(err);
            }
            resolve(rows);
         });
    });

    //INCLUIR VALIDACIÓN EN CASO DE NO ENCONTRAR

    /*if( responseDB.length === 0){
        throw new Error( `No se encontro a paciente ${apellido}, ${nombre} en nuestro registro`)
    }*/

    return responseDB
}

async function updatePaciente( body, documento ) { //MODIFICA PACIENTE BUSCANDO POR DOCUMENTO
    var updateQuery = 'UPDATE PACIENTES SET '               +
    'Documento = "'             + body.Documento            + 
    '", Tipo_documento = "'     + body.Tipo_documento       +
    '", Nombre = "'             + body.Nombre               +
    '", Apellido = "'           + body.Apellido             + 
    '", ID_Barrio = "'          + body.ID_Barrio            +
    '", Telefono = "'           + body.Telefono             +
    '", Correo = "'             + body.Correo               + 
    '", Fecha_Nacimiento = "'   + body.Fecha_Nacimiento     + 
    '"  WHERE Documento = "'    + documento                 +  '"'


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

    //INCLUIR VALIDACION EN CASO DE NO ENCONTRAR 
    
   /* if( responseDB._id.toString() !== id ){
        throw new Error(`No se encontró al paciente`)
    }*/
    
    return updateData(updateQuery)
}
    
async function addPaciente( body ) { //ALTA DE PACIENTE 
    var insertQuery = 'INSERT INTO PACIENTES(ID_Paciente, Documento, Tipo_Documento, Nombre, Apellido, ID_Barrio, Telefono, Correo, Fecha_Nacimiento, ID_LoginPaciente, ID_Antecedente)' + 
    'VALUES ('      + body.ID_Paciente         + 
            ','     + body.Documento                 +
            ',"'    + body.Tipo_documento      +
            '","'   + body.Nombre              +
            '","'   + body.Apellido            +
            '",'    + body.ID_Barrio           +
            ','     + body.Telefono            +
            ',"'    + body.Correo              +
            '","'   + body.Fecha_Nacimiento    +
            '",'    + body.ID_LoginPaciente    +
            ','     + body.ID_Antecedente      +  ')'
            

    const insertData = (Query) => {
        return new Promise((resolve, reject) => {
            db.run(Query, (err) => {
                if (err) {
                    reject(err);
                }
                resolve("PACIENTE DADO DE ALTA");
            });
        });
    };

    //INCLUIR VALIDACIÓN EN CASO DE EXISTIR 

   /* 
    if( responseDB && responseDB.length != 0 ) {
        throw new Error("El paciente ya se encuentra registrado")
    }
    */
   return insertData(insertQuery);
}

async function deletePacientePorDni( documento ) { //DAR DE BAJA CLIENTE POR DOCUMENTO
    const deleteQuery = 'DELETE FROM PACIENTES WHERE documento = "'+ documento + '"'
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
   
   /* if( !responseDB ){
        throw new Error(`No se encontró al paciente`)
    } */
    return deleteData(deleteQuery)
}


module.exports = {
    getAll,
    getPacientePorID,
    getPacientePorDni,
    getPacientePorApellido,
    getPacientePorNyA,
    updatePaciente,
    addPaciente,
    deletePacientePorDni
}