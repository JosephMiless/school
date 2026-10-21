import { createClassService } from "../services/class.services.js";
import { BadRequestError } from "../utils/app.errors.js";
import { createClasssSchema } from "../validators/class.js";


export const createClassController = async (req, res, next) => {
    try {
        const {error, value} = createClasssSchema.validate(req.body);

        if(error) throw new BadRequestError(error.message);

        const classRecord = await createClassService(value);

        return res.status(201).json({
            message: 'Class record created sucessfully',
            classRecord
        });
    } catch (error) {
        next(error);
    }
};