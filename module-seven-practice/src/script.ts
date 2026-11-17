import express, { type Application, type Response,  type Request } from "express"
import config from "./config/config";
import { Pool } from "pg";

const app: Application = express()
const port = config.port


const pool = new Pool({
  connectionString: config.connection_string
})

const initDB = async() => {
  try {
    console.log("Database connected succussfully")
    
  } catch (error) {
    console.log(error)
    
  }
}
initDB()


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})