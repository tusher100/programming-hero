import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log("request", req);
    // console.log("request", res);
    // console.log(req.url)
    // console.log(req.method)
    const url = req.url; //endponts
    const method = req.method; //get post put....

    if (url === "/" && method === "GET") {
      // console.log("This is root route");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({message: "this is root route"}));
    } else if (url?.startsWith("/products")){
        res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({message: "this is products route"}));

    }else {
      res.writeHead(404, { "content-type": "application/json"  });
      res.end(JSON.stringify({message:"this route not found"}));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is running");
});
