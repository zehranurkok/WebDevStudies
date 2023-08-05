import express from "express";
import bodyParser from "body-parser";

// The following are required to reach the path.
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Adding middleware function. This method called before any of the route handlers.
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/login", (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})