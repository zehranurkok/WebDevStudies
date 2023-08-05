import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Adding middleware function. This method called before any of the route handlers.
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})