import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// https://axios-http.com/docs/intro
// https://axios-http.com/docs/api_intro for examples

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("URL", config);
        res.json({data: response.data})
    } catch (error) {
        res.status(404).send("Failed to fetch pageResult. Try again.");
    }
})

app.post("/", async (req, res) => {
    try {
        // https://axios-http.com/docs/req_config
        await axios.post("URL", formdata, config);
        res.sendStatus(201);
    } catch (error) {
        res.status(404).send(error.response.data);
    }
})

// Put request provides all of the data that we want to update in backend. ( Replace entire entry )
app.put("/", async (req, res) => {
    try {
        await axios.put("URL", formdata, config);
        res.sendStatus(200);
    } catch (error) {
        res.status(404).send(error.response.data);
    }
})

app.patch("/", async (req, res) => {
    try {
        await axios.patch("URL", formdata, config);
        res.sendStatus(200);
    } catch (error) {
        res.status(404).send(error.response.data);
    }
})

app.delete("/", async (req, res) => {
    try {
        await axios.delete("URL", config);
        res.sendStatus(200);
    } catch (error) {
        res.status(404).send(error.response.data);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})