import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRoute } from "./modules/users/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
const app: Application = express();
import fs from "fs"

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  //console.log("Method -> URL -> Time", req.method, req.url, Date.now());
  const log = `\nMethod: ${req.method} | URL: ${req.url} | Time: ${Date.now()}\n`;
  
  fs.appendFile("logger.txt", log, (err) =>{
    console.log(err)
  })
  
  next();
});

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

export default app;
