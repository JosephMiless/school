import jwt from "jsonwebtoken";
import { config } from "./env.js";

export const aToken = (payload) => {
  return jwt.sign(payload, config.access, {
    expiresIn: "15m",
  });
};
