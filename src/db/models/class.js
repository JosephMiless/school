import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/db.js";

export class Class extends Model {
    static associate(models) {
      // define associations here
    }
  }

  Class.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      class_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      section: {
        type: DataTypes.STRING,
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
      modelName: "Class",
      indexes: [
        {
          unique: true,
          fields: ["class_name", "section"],
          name: "unique_class_section",
        },
      ],
    },
  );
