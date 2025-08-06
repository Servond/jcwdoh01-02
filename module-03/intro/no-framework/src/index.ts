import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8080;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write("Ini Adalah API Tanpa Framework");

      res.end();
    }
    if (req.url === "/api/users" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          user: "Budi",
        })
      );

      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
