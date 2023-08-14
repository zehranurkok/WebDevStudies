import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    const name = req.body["iname"].trim();
    let lengthOfName = name.length;

    [...name].forEach(element => {
        if(element === " ") {lengthOfName--;}
    });
    
    const text = `Number of letters: ${lengthOfName}`;
    res.render("index.ejs", {numberOfLetters: text});
})

app.listen(port, () => {
    console.log(`Surver running on port ${port}.`);
})