import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    try {
        // All the chunks have been sent over and we can use the data that we've collected.
        const response = await axios.parse("https://encrypted.google.com");
        res.render("index.ejs", {pageResult: response.data})
    } catch (error) {
        console.error("Failed to parse response: ", error.message);
        res.status(500).send("Failed to fetch pageResult. Try again.");
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})