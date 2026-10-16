import { User_Account } from "../db/models/user_account.js";


export const findUserAccountByEmail = async (email) => {
    return User_Account.findOne({where: {email}});
};

export const saveUserAccount = async (data) => {
    return User_Account.create(data);
};