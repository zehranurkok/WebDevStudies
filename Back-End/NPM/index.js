// var generateName = require('sillyname');
// import generateName from "sillyname";
// import superheroes from "superheroes";
// const name = superheroes.random();
// // console.log(`I'm ${name}!`);



// 1. Use inquirer to get user input and qr-image to turn the user entered URL into a QR code image.
import inquirer from "inquirer";
var qr = require('qr-image');

inquirer
  .prompt([{ 
    message : "Type in your URL: ", name: "URL"
  }])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(require('fs').createWriteStream('qrimage.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




// 3. Create a text file to save the user input using the native fs node module.