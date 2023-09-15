import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

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

// GET a data by filtering type
app.get("/filter", (req, res) => {
    const type = req.query.type;
    const filteredTypes = data.filter((value) => value.dtype === type);
    res.json(filteredTypes);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

// POST Request
app.post("/data", (req, res) => {
    const newData = {
        id: data.length + 1,
        name: req.body.name,
        dtype: req.body.type,
    };
    data.push(newData);
    console.log(data.slice(-1));
    res.json(newData);
})

// PUT Request
app.put("/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const replacementData = {
        id: id,
        name: req.body.name,
        dtype: req.body.type,
    };
    const Index = data.findIndex((value) => value.id === id);
    data[Index] = replacementData;
    console.log(replacementData);
    res.json(replacementData);
})

// PATCH Request
app.patch("/data/:id", (req, res) => {
    const existingData = data.find((value) => value.id == req.params.id);
    const replacementData = {
        id: id,
        name: req.body.name || existingData.name,
        dtype: req.body.type || existingData.dtype,
    };
    const Index = data.findIndex((value) => value.id == req.params.id);
    data[Index] = replacementData;
    console.log(replacementData);
    res.json(replacementData);
})

var data = [
    {
        id: 1,
        dtype: "movie",
        name: "The Ninth Gate"
    },
    {
        id: 2,
        dtype: "movie",
        name: "Eat Pray Love"
    },
    {
        id: 3,
        dtype: "movie",
        name: "Ready Player One"
    },
    {
        id: 4,
        dtype: "movie",
        name: "The Silence of the Lambs"
    },
    {
        id: 5,
        dtype: "movie",
        name: "The Da Vinci Code"
    },
    {
        id: 6,
        dtype: "book",
        name: "Kvaidan: Tuhaf Şeylere Dair Öyküler ve İncelemeler"
    },
    {
        id: 7,
        dtype: "book",
        name: "Öğrenci Kız"
    },
    {
        id: 8,
        dtype: "book",
        name: "Üç Köşeli Dünya"
    },
    {
        id: 9,
        dtype: "book",
        name: "Dünyanın Ötesindeki Orman"
    },
    {
        id: 10,
        dtype: "book",
        name: "Innsmouth'un Üzerindeki Gölge"
    },
    {
        id: 11,
        dtype: "book",
        name: "Dorian Gray'in Portresi"
    },
    {
        id: 12,
        dtype: "movie",
        name: "The Manor"
    },
    {
        id: 13,
        dtype: "drama",
        name: "Gilmore Girls"
    }
];