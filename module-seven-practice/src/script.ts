import express, {
  type Application,
  type Response,
  type Request,
} from "express";
import config from "./config/config";
import { Pool } from "pg";

const app: Application = express();
const port = config.port;
app.use(express.json());

const pool = new Pool({
  connectionString: config.connection_string,
});

const initDB = async () => {
  try {
    await pool.query(`

      CREATE TABLE IF NOT EXISTS students(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      age INT,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      
      )
      
      `);
    console.log("Database connected succussfully");
  } catch (error) {
    console.log(error);
  }
};
initDB();

app.post("/api/v1/students", async (req: Request, res: Response) => {
  try {
    const { name, email, age, is_active } = req.body;
    const result = await pool.query(
      `
      INSERT INTO students (name, email, age, is_active) VALUES ($1, $2, $3, $4) RETURNING *
      
      `,
      [name, email, age, is_active],
    );
    res.status(201).json({
      success: true,
      message: "student add successfully",

      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
});

app.get("/api/v1/students", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM students
      
      `);

    res.status(200).json({
      success: true,
      message: "student retrive successfully",

      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
