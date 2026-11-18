import { Router, } from "express";
import { userController } from "./user.controller";

const router = Router(

)

//api/v1/users
router.post("/", userController.createUser);

export const userRoute = router