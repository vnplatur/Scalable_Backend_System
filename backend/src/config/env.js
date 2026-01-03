import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const NODE_ENV = process.env.NODE_ENV;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const JWT_EXPIRE = process.env.JWT_EXPIRE;
export const REDIS_URL = process.env.REDIS_URL;
