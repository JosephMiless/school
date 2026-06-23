import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/db.js";

export class Course extends Model {};

Course.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "Teachers",
        key: "id"
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Course",
  },
);