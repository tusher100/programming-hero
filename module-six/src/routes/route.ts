import type { IncomingMessage, ServerResponse } from "http";
import ProductController from "../controllers/products.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse)=>{
    const url = req.url; //endponts
    const method = req.method; //get post put....

    if (url === "/" && method === "GET") {
      // console.log("This is root route");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({message: "this is root route"}));
    } else if (url?.startsWith("/products")){
        ProductController(req, res)
 

    }else {
      res.writeHead(404, { "content-type": "application/json"  });
      res.end(JSON.stringify({message:"this route not found"}));
    }

}

export default routeHandler