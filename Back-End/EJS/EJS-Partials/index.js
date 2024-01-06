import express from "express";

const app = express();
const port = 3000;

// Tell express that is where our static files are located, we can use this middleware
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})