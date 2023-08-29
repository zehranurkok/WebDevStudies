import https from "https";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {

    const options = {
        hostname: "https://encrypted.google.com",
        path: "/endpoint",
        method: "GET",
    };

    const request = https.request(options, (response) => {

        let data = "";
      
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
            try {
                // All the chunks have been sent over and we can use the data that we've collected.
                const result = JSON.parse(data);
                res.render("index.ejs", {pageResult: data})
            } catch (error) {
                console.error("Failed to parse response: ", error.message);
                res.status(500).send("Failed to fetch pageResult. Try again.");
            }
        })
    });
      
    request.on('error', (error) => {
        console.error("Failed to parse response: ", error.message);
        res.status(500).send("Failed to fetch pageResult. Try again.");
    });

    request.end(); 
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})