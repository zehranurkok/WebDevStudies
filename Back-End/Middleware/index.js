import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.post("/submit", (req, res) => {
    res.send("Your name is: " + req.body["firstname"] + " " + req.body["surname"]);
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})

// OR

// import express from "express";
// import bodyParser from "body-parser";

// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;
// var yourName = "";

// app.use(bodyParser.urlencoded({ extended: true}));

// function nameGenerator (req, res, next) {
//     console.log(req.body);
//     yourName = req.body["firstname"] + req.body["surname"];
//     next();
// }

// app.use(nameGenerator);

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// })

// app.post("/submit", (req, res) => {
//     res.send(`<h1>Your name is: </h1><h2>${yourName}</h2>`);
// })

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}.`);
// })