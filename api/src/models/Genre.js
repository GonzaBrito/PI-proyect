const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false
    });
};








// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('genre', {
//     id: {
//       type: DataTypes.UUID, 
//       primaryKey: true,
//       allowNull: false,
//       defaultValue: DataTypes.UUIDV4
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       // validate:{
//       //   len:{
//       //       args: [4, 15],
//       //       msg: "El genero debe contener entre 4 y 15 caracteres",
//       //   },
//       // },
//     },
//   },
//   { freezeTableName: true, timestamps: false}
//   );
// };