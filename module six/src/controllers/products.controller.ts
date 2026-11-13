import type { IncomingMessage, ServerResponse } from "http";

const ProductController =(req: IncomingMessage, res: ServerResponse)=>{
           res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({message: "this is products route"}));

}

export default ProductController