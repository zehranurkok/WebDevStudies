import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        minutes: new Date().getMinutes(),
        oddnumber: "Odd number!",
        evennumber: "<p>Even number!</p>",
    };

    res.render("index.ejs", data);
})

app.listen(port, () => {
    console.log(`Server runningon port ${port}.`);
})