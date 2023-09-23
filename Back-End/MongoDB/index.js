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
    // Establishing Relationships and Embedding Documents
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

// Update Many Data 
// Movie.insertMany([movie1, movie2]);

// Update One Data
// await Person.updateOne({ name: "Zehra Nur"}, {favoriteMovie: { _id:'650ea6b438e4e4f30f3f1e19'}});

// Delete Many Data
// await Person.deleteMany({name: "aaaa", age: { $lte: 20 }});

// Delete One Date
// await Movie.deleteOne({ _id: '650ea904ca4f4bcdbb9e6ade' });

// let resultPerson = await Person.find({ name: "Zehra Nur" }).exec();
// let resultMovie = await Movie.find({});
let resultMovie = await Movie.find({ _id:'650ea6b438e4e4f30f3f1e19' });
// resultPerson.forEach(function(person) {console.log(person.name)});
// resultMovie.forEach(function(movie) {console.log(movie.name)});
console.log(resultMovie);
mongoose.connection.close();