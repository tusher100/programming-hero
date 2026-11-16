import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_oFYdzVt1k2eS@ep-rapid-scene-a1doomuq.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

console.log(pool);
app.get("/", (req: Request, res: Response) => {
 // console.log(req);
  res.status(200).json({
    success: true,
    message: "Hello World! this is root route!",
    author: "PH",
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name, age, password } = req.body;
  //console.log(password)

  res.status(200).json({
    success: true,
    message: "this is test api",
    data: { name, age },
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
