import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT,
  access: process.env.ACCESS_SECRET,
  db_uri: process.env.DATABASE_URI
};
