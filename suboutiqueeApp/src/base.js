const sqlite3 = require('sqlite3').verbose(); //importo el servicio sqlite

//---------CONEXIÓN A BD------------
const base ='./src/bd/sqlite.db'; // ruta de la base de datos
const db = new sqlite3.Database(base, (err) =>{
   
    if(err) return console.error(err.message); //si no puede conectar muestra error
    console.log("Conectado a la BD");

});

//---------CIERRO LA CONEXIÓN------------
/*db.close((err) =>{
    if(err) return console.log(error.message);
});*/

module.exports = db;