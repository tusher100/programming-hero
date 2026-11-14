import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandler from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log("request", req);
    // console.log("request", res);
    // console.log(req.url)
    // console.log(req.method)
    routeHandler(req, res)
  },
);

server.listen(config.port, () => {
  console.log(`Server is running ${config.port}`);
});
