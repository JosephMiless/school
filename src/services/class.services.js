import { sequelize } from "../lib/db.js"
import { createClassRecord, findClassByNameAndSection } from "../repository/class.repository.js";
import { BadRequestError } from "../utils/app.errors.js";


export const createClassService = async (classData) => {
    return sequelize.transaction(async (t) => {
        const classExists = await findClassByNameAndSection(classData.class_name, classData.section, {transaction: t});

        if(classExists) throw new BadRequestError(`Class record already exists.`);

        const newClassRecord = await createClassRecord(classData);

        return newClassRecord;
    });
};