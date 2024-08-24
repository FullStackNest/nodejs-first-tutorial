const qs = require("querystring");
const { DATA, USER } = require("./data");

function homeController(req, res, parsedURL) {
    console.log("Nodejs !");
    const qry = qs.parse(parsedURL.query)
    console.log(qry);
    res.write(`<h1>Nodejs Server Home page</h1>`) // server side UI
    res.end();
}

function dataController(req, res) {
    res.end(JSON.stringify({ // endpoint
        status: 200,
        data: DATA,
        user: USER
    }))
}

module.exports = {
    homeController,
    dataController
}