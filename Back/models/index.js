const Sequelize = require('sequelize');

const Producto = require('./producto');
const Usuario = require('./usuario');
const Reporte = require('./reporte');

let db = {};

const sequelize = new Sequelize('mainDB', null, null, {
    dialect: 'sqlite',
    storage: './mainDB.sqlite'
});

sequelize.authenticate()
    .then(function() { console.log('Autenticado :)'); })
    .catch(function () { console.log('No se autentica :('); });


const sincronizar = function() { 
    sequelize.sync()
        .then(function(err) {
            console.log('Sincronizado');
        })
        .catch(function(err) {
            console.log('Error de sincronizacion');
        });
};

db.sync = sincronizar;

db.Producto = Producto(sequelize, Sequelize);
db.Usuario = Usuario(sequelize, Sequelize);
db.Reporte = Reporte(sequelize, Sequelize);

//db.Persona.associate(db);

module.exports = db;