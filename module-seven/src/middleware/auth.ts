import { type Request, type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";
import type { Role } from "../types";

const auth = (...roles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //console.log("protected");

    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const decode = jwt.verify(
        token as string,
        config.secret_key,
      ) as JwtPayload;

      const user = await pool.query(
        `
        SELECT * FROM users WHERE email=$1`,
        [decode.email],
      );

      if (!user.rows[0].is_active) {
        return res.status(403).json({
          success: false,
          message: "forbidden",
        });
      }

      if (roles.length && !roles.includes(user.rows[0].role)) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      req.user = decode;
      next();
    } catch (error) {
      next(error);
    }
  };
};
export default auth;
