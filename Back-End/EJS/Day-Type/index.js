import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let advice = "work hard!";

    if (day === 0 || day === 6) {
        type = "the weekend";
        advice = "have fun!";
    }

    res.render("index.ejs", {
        type, advice
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})