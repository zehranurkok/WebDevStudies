import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

app.use(bodyParser.urlencoded({ extended: true }));

// GET random data
app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    // Converting in the format of a JavaScript object data into a JSON object and returning that back out as the output.
    res.json(data[randomIndex]);
})

// GET specific data
app.get("/data/:id", (req, res) => {
    // Access any of the URL or path paramethers.
    const id = parseInt(req.params.id);
    const foundData = data.find((value) => value.id === id);
    res.json(foundData);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

var data = [
    {
        id: 1,
        type: "movie",
        name: "The Ninth Gate"
    },
    {
        id: 2,
        type: "movie",
        name: "Eat Pray Love"
    },
    {
        id: 3,
        type: "movie",
        name: "Ready Player One"
    },
    {
        id: 4,
        type: "movie",
        name: "The Silence of the Lambs"
    },
    {
        id: 5,
        type: "movie",
        name: "The Da Vinci Code"
    },
    {
        id: 6,
        type: "book",
        name: "Kvaidan: Tuhaf Şeylere Dair Öyküler ve İncelemeler"
    },
    {
        id: 7,
        type: "book",
        name: "Öğrenci Kız"
    },
    {
        id: 8,
        type: "book",
        name: "Üç Köşeli Dünya"
    },
    {
        id: 9,
        type: "book",
        name: "Dünyanın Ötesindeki Orman"
    },
    {
        id: 10,
        type: "book",
        name: "Innsmouth'un Üzerindeki Gölge"
    },
    {
        id: 11,
        type: "book",
        name: "Dorian Gray'in Portresi"
    }
];