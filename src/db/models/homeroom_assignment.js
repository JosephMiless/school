import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/db.js";


export class Homeroom_Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Homeroom_Assignment.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      teacher_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "Teachers",
          key: "id",
        },
      },
      class_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Classes",
          key: "id",
        },
      },
      academic_year_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Academic_Years",
          key: "id",
        },
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
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
      modelName: "Homeroom_Assignment",
    },
  );
