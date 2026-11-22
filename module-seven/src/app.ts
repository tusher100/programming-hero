import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRoute } from "./modules/users/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import fs from "fs"
import logger from "./middleware/logger";
import globaleErrorHandler from "./middleware/globalErrorHandler";
import cors from "cors";

const app: Application = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}


app.use(cors(corsOptions))
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get("/", (req: Request, res: Response) => {
  // console.log(req);
  res.status(200).json({
    success: true,
    message: "Hello World! this is root route!",
    author: "PH",
  });
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/profiles", profileRoute);
app.use("/api/v1/auth", authRoute);

// Global Error Handling Middleware
app.use(globaleErrorHandler);

export default app;
