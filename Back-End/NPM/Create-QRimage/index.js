// var generateName = require('sillyname');
// import generateName from "sillyname";
// import superheroes from "superheroes";
// const name = superheroes.random();
// // console.log(`I'm ${name}`);



// Use inquirer to get user input and qr-image to turn the user entered URL into a QR code image.
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ 
    message : "Type in your URL: ", name: "URL"
  }])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('qr_url.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// Create a text file to save the user input using the native fs node module.