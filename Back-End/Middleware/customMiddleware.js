import express from "express";
const app = express();
const port = 3000;

// CUSTOM MIDDLEWARE

// app.use((req, res, next) => {
//     console.log("Request Method: ", req.method);
//     // If there is another middleware below, the "next" function allows us to switch to that middleware.
//     // Because of this code order is so important.
//     next();
// })

function customMiddleware(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}

app.use(customMiddleware);

// ANOTHER MIDDLEWARE

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
})