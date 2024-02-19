import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { CategoriaModel } from '../model/CategoriaModel.js'
export const GastoModel = sequelize.define("gastos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  fechaT: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{
    timestamps :false
});

CategoriaModel.hasMany(GastoModel, { foreignKey: "categoria_id" });
GastoModel.belongsTo(CategoriaModel, { foreignKey: "categoria_id" });