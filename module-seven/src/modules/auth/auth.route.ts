import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router()

export const authRoute = router

router.post("/login", authController.loginUser)

router.post("/refresh-token", authController.generateToken)