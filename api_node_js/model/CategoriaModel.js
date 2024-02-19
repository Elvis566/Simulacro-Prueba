import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
export const CategoriaModel = sequelize.define(
  "categorias",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
