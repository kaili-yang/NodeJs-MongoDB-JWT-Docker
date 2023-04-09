const http = require("http");
const app = require("./app");
const server = http.createServer(app);
require("dotenv").config({path: './.env'});

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});