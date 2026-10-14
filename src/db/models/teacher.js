import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/db.js";

export class Teacher extends Model {};

Teacher.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    employment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    employment_status: {
      type: DataTypes.ENUM("ACTIVE", "LEAVE", "SUSPENDED", "RETIRED", "FIRED"),
      allowNull: false,
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
    modelName: "Teacher",
  },
);
