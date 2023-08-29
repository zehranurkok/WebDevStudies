import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    try {
        await axios.post("URL", formdata, config);
        res.sendStatus(201);
    } catch (error) {
        res.status(404).send(error.response.data);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})