import jwt from "jsonwebtoken";
import { config } from "../lib/env.js";

export const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized, no authHeader" });
    }
    
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized, no token provided" });
    }
    jwt.verify(token, config.access, (error, user) => {
      if (error) {
        return res.status(403).json({ error: "This session has expired. Kindly re-login" });
      }
      
      req.user = user;
      next();
    });
  } catch (error) {
    console.error("Internal server error: auth", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};

// export const adminAuth = (req, res, next) => {
// try {

//     const user = req.user;
    
//     if (user.role !== "admin")
//       return res
//         .status(403)
//         .json({ error: "You do not have access to this endpoint" });

//     next();
  
// } catch (error) {

//   console.log(`Internal server error: admin auth`, error);
  
//   return res.status(500).json({error: `Internal server error!`});
  
// }
// }