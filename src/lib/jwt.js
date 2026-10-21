import jwt from "jsonwebtoken";
import { env } from "./env.js";

export const aToken = (payload) => {
  return jwt.sign(payload, env.access, {
    expiresIn: "30m",
  });
};

export const rToken = (payload) => {
  return jwt.sign(payload, env.refresh, {
    expiresIn: '7d'
  });
};