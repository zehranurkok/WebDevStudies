import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/PeopleDB');

const personSchema = new mongoose.Schema ({ 
    name: {
        type: String,
        // Validation: https://mongoosejs.com/docs/validation.html
        required: true
    }, 
    surname: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

const zehra = new Person({ 
    name: 'Zehra Nur',
    surname: 'Kök',
    age: 26
});

const x = new Person({ 
    name: 'xxxxx',
    surname: 'xxxxx',
    age: 20
});

// person.save();

// https://mongoosejs.com/docs/api/model.html
// Save more than one data 
// Person.insertMany([zehra, x]);

let result = await Person.find({});
result.forEach(function(person) {console.log(person.name)});
mongoose.connection.close();