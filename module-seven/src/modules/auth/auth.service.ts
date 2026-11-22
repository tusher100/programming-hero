import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../../config";

const loginUserIntoDB = async (payLoad: {
  email: string;
  password: string;
}) => {
  //if user exist
  //check password is correct
  //check user statuse
  //generate token

  const { email, password } = payLoad;

  const user = await pool.query(
    `
        SELECT * FROM users WHERE email=$1`,
    [email],
  );
  console.log(user.rows[0]);

  if (user.rowCount === 0) {
    throw new Error("Invalid cread!!");
  }

  const matchPassword = await bcrypt.compare(password, user.rows[0].password);
  if (!matchPassword) {
    throw new Error("Invalid cread!!");
  }

  if (!user.rows[0].is_active) {
    throw new Error("blocked");
  }

  const jwtPayload = {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };

  const accessToken = jwt.sign(jwtPayload, config.secret_key, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign(jwtPayload, config.refresh_key, {
    expiresIn: "10d",
  });

  delete user.rows[0].password;

  return { accessToken, refreshToken, user: user.rows[0] };
};

const generateAccessToken = async (token: string) =>{

      if (!token) {
      throw new Error("Unauthorized")
      }

      const decode = jwt.verify(
        token as string,
        config.refresh_key,
      ) as JwtPayload;

      const user = await pool.query(
        `
        SELECT * FROM users WHERE email=$1`,
        [decode.email],
      );
      if (user.rowCount === 0){
        throw new Error("User not found")
      }

      if (!user.rows[0].is_active) {
        throw new Error("forbidden")
      }

        const jwtPayload = {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };

  const accessToken = jwt.sign(jwtPayload, config.secret_key, {
    expiresIn: "1h",
  });

  return {accessToken};


}

export const authService = {
  loginUserIntoDB,
  generateAccessToken
};
