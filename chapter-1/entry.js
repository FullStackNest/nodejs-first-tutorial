// Plain-nodejs without any framework (Express.js**, Nest.js)
const http = require("http");
const url = require("url");


const { homeController, dataController } = require("./controller");
// esm (import,export), ejs, cjs(require, module.exports)

// ESM: EcmaScript Module
// EJS: Embedded JavaScript
// CJS: Common JavaScript

http.createServer(function (req, res) {
    const parsedURL = url.parse(req.url)
    const path = parsedURL.pathname;
    const method = req.method.toUpperCase(); // GET, POST, PUT, DELETE, PATCH

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }


    if (path === "/") {
        homeController(req, res, parsedURL)
    }
    else if (path === "/data" && method === "GET") {
        dataController(req, res)
    }
}).listen(8000, function () {
    console.log("Server Started");

})