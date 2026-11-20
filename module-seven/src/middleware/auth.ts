import { type Request, type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";

const auth = (... roles: any) =>{
    return async (req: Request, res: Response, next: NextFunction) => {
  //console.log("protected");

  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const decode = jwt.verify(token as string, config.secret_key) as JwtPayload;

  const user = await pool.query(
    `
        SELECT * FROM users WHERE email=$1`,
    [decode.email],
  );

  if (!user.rows[0].is_active) {
    res.status(403).json({
      success: false,
      message: "forbidden",
    });
  }

  req.user = decode;
  next();
};

}
export default auth;
