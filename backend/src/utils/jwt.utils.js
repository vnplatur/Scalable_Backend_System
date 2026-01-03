import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRE } from "../config/env.js";


export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
};

export const verifyToken = (token)=>{
    return jwt.verify(token,JWT_SECRET);
}