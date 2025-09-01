const http = require("node:http");
const PORT = 8089;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log("Request for " + url + " received." + " Method: " + method);
  if (url === "/") {
    if (method !== "GET") {
      res.writeHead(405, { "Content-Type": "text/html" });
      return res.end("Method Not Allowed");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome");
  } else if (url === "/abouts") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("About Us: We are a company that does fitness CRM, DataRAG");
  } else if (url === "/fitness") {
    const fitnessData = {
      name: "John Doe",
      age: 30,
      height: "6ft",
      weight: "180lbs",
      goals: ["Build muscle", "Lose fat", "Improve endurance"],
      shouldSleep8Hours: true,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fitnessData));
  }
});

server.listen(PORT, () => {
  console.log("Thumbs up Server running at http://localhost:/" + PORT);
});
