import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  access: process.env.ACCESS_SECRET,
  db: {
    user: process.env.DB_USER,
    name: process.env.DB_NAME,
    pass: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
};
