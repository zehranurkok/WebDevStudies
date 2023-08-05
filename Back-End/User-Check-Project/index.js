import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// function checkUser (req, res) {
//     if (req.body["user"] === "zehranurkok" && req.body["password"] === "12345") {
//         res.sendFile(__dirname + "/public/result.html");
//     }
//     else {
//         res.sendFile(__dirname + "/public/index.html");
//         // or res.redirect("/"); same thing
//     }
// }

// app.use(checkUser);

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// })

// app.post("/submit", (req, res) => {
//     res.send(checkUser);
// })

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}.`);
// })


var result = false;

function checkUser (req, res, next) {
    if (req.body["user"] === "zehranurkok" && req.body["password"] === "12345") {
        result = true;
    }
    next();
}

app.use(checkUser);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
    if (result) {
        res.sendFile(__dirname + "/public/result.html");
    } else {
        // res.sendFile(__dirname + "/public/index.html"); or
        res.redirect("/")
    } 
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})