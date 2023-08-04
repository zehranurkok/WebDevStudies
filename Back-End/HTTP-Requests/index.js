import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // Example 1
    // rawHeaders: basically a list of key value pairs that come from where the request originated
    // console.log(req.rawHeaders);

    // Example 2
    // res.send("Hello!");

    // Example 3
    res.send("<h1>Hello, world!</h1>");
})

app.get("/posts", (req, res) => {
    res.send("<h2>Blog Posts</h2>");
})

app.get("/about", (req, res) => {
    res.send("<h2>About Me</h2>");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
})