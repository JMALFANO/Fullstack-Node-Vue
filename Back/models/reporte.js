module.exports = (sequelize, DataTypes) => {
    let Reporte = sequelize.define('Reporte' , {
        maquina: DataTypes.INTEGER,
        counttrabacolocador: DataTypes.INTEGER,
        countcontrolremoto: DataTypes.INTEGER,
        countsopladovacio: DataTypes.INTEGER,
        counthumofuego: DataTypes.INTEGER,
        fecha: DataTypes.STRING
    });

    return Reporte;
}