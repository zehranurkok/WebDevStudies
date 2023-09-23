import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/PeopleDB');

const movieSchema = new mongoose.Schema ({ 
    name: String,
    rating: Number
});

const personSchema = new mongoose.Schema ({ 
    name: {
        type: String,
        // Validation: https://mongoosejs.com/docs/validation.html
        required: [true, "Why no name?"]
    }, 
    surname: String,
    age: Number,
    favoriteMovie: movieSchema
});

const Movie = mongoose.model('Movie', movieSchema);
const Person = mongoose.model('Person', personSchema);

// const zehra = new Person({ 
//     name: 'Zehra Nur',
//     surname: 'Kök',
//     age: 26
// });

// const x = new Person({ 
//     name: 'xxxxx',
//     surname: 'xxxxx',
//     age: 20
// });

const a = new Person({ 
    name: 'aaaa',
    surname: 'aaaa',
    age: 20
});

const movie1 = new Movie ({
    name: "Van Helsing",
    rating: 10
});

const movie2 = new Movie ({
    name: "The Silence of the Lambs",
    rating: 7
});

// a.save();

// https://mongoosejs.com/docs/api/model.html
// Save More than One Data 
Movie.insertMany([movie1, movie2]);

// Update Data
await Person.updateOne({ name: "Zehra Nur"}, {favoriteMovie: movie1});

// Delete Data
// await Person.deleteMany({name: "aaaa", age: { $lte: 20 }});

// Establishing Relationships and Embedding Documents

let resultPerson = await Person.find({ name: "Zehra Nur"}).exec();
// let resultMovie = await Movie.find({});
// resultPerson.forEach(function(person) {console.log(person.name)});
// resultMovie.forEach(function(movie) {console.log(movie.name)});
console.log(resultPerson);
mongoose.connection.close();