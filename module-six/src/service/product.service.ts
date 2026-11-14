import path from "node:path";
import fs from "fs";
import type { Iproducts } from "../types/product";

const filePath = path.join(process.cwd(), "./src/database/db.json")

export const productService = () => {
//console.log(filePath)
const result = fs.readFileSync(filePath, "utf-8")

return JSON.parse(result)

}


export const createProducts = (payLoad: Iproducts) => {
    fs.writeFileSync(filePath, JSON.stringify(payLoad));


}