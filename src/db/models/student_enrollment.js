import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/db.js";


export class Student_Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Enrollment.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      student_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Students",
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
        },
      },
      enrollment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      enrollment_status: {
        type: DataTypes.ENUM(
          "ACTIVE",
          "PROMOTED",
          "TRANSFERRED",
          "WITHDRAWN",
          "REPEAT",
        ),
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
      modelName: "Student_Enrollment",
    },
  );
