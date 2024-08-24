const express = require("express");
const cors = require('cors');

const { DATA } = require("./data");
const PORT = 8000;


const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true })); // it makes req.body accessible
app.use(express.json()); // after accessible it converts in json automatically

app.get("/", (req, res) => {
    const qry = req.query;
    console.log(qry);
    res.send(`<h1>Welcome to Nodejs</h1>`)

})

app.get("/new", (req, res) => {
    res.status(200).send(`<h1>New Page</h1>`)
})

app.post("/new", (req, res) => {
    let data = req.body;
    console.log(data);

    if (data?.username) {
        res.status(200).json({
            message: "success"
        })
    } else {
        res.status(500).json({
            message: "error"
        })
    }

})

app.get("/data", (req, res) => {
    res.status(200).json(DATA)
})

app.listen(PORT, () => {
    console.log(`Server started ${PORT}`);

})

