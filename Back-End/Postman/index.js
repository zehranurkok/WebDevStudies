import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
})

app.post("/register", (req, res) => {
    // We can do something with the data
    res.sendStatus(201);
})

app.put("/user/zehra", (req, res) => {
    // Update all user information
    res.sendStatus(200);
})

app.patch("/user/zehra", (req, res) => {
    // Update user name
    res.sendStatus(200);
})

app.delete("/user/zehra", (req, res) => {
    // Deleteing user
    res.sendStatus(201);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
})