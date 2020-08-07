module.exports = (sequelize, DataTypes) => {
    let Producto = sequelize.define('Producto' , {
        descripcion: DataTypes.STRING,
        imagen: DataTypes.STRING,
        pico: DataTypes.INTEGER,
        cubicaje: DataTypes.INTEGER,
        cantxbolsa: DataTypes.INTEGER,
        tono: DataTypes.INTEGER,
        alto: DataTypes.INTEGER,
        diametro: DataTypes.INTEGER
    });

    return Producto;
}