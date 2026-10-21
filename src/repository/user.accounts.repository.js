import { User_Account } from "../db/models/user_account.js";


export const findUserAccountByEmail = async (email, option = {}) => {
    return User_Account.findOne({where: {email}}, option);
};

export const saveUserAccount = async (data, option = {}) => {
    return User_Account.create(data, option);
};