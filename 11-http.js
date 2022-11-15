import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to paradise!");
    res.end();
    return;
  }
  if (req.url === "/main") {
    res.write("Welcome to main page");
    res.end();
    return;
  } else {
    res.write("Something else?");
    res.end();
    return;
  }
});

server.listen(5000);
