import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const ProductController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/products" && method == "GET") {

    // const products = [
        
       
    // ]
   const products = productService()
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products retrive successfully" , data: products}));
  }
};

export default ProductController;
