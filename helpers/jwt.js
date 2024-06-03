import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export const createToken = (paylod) =>
  jwt.sign(paylod, JWT_SECRET, { expiresIn: "23h" });

export const verifyToken = (token) => jwt.verify(token, JWT_SECRET);
