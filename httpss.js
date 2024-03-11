const http = require("http");

const server = http.createServer((req, res) => {
  /* if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome Home baby");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("We could not find the requested page");
  }*/
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Here is more info about us");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(
      `<h1>Oops</>
        <p>The page could not be found, kindly check spelling</p>
        `
    );
  }
});
server.listen(5000, () => {
  console.log("The server is listening on port 5000");
  console.log(`Go to http://localhost:5000`);
});
