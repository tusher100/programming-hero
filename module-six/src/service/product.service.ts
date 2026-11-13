import path from "node:path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/db.json")

export const productService = () => {
//console.log(filePath)
const result = fs.readFileSync(filePath, "utf-8")

return JSON.parse(result)

}