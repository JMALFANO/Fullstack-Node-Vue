module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario' , {
        nombre: DataTypes.STRING,
        contrasena: DataTypes.STRING,
        rol: DataTypes.INTEGER
    });

    /*Persona.associate = (model) => {
        model.Persona.belongsTo(model.Departamento, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        })
    }*/

    return Usuario;
}