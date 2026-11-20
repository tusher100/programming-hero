import { Router, } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router()



//api/v1/users
router.post("/", userController.createUser);

router.get("/", auth("admin", "agent", "user"), userController.getAllUsers);

router.get("/:id", userController.getSingleUser);

router.put("/:id", userController.updateUser );

router.delete("/:id", userController.deleteUser);




export const userRoute = router