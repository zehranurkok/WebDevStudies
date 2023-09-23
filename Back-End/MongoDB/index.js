import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/PeopleDB');

const personSchema = new mongoose.Schema ({ 
    name: String, 
    surname: String,
    birthYear: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({ 
    name: 'Zehra Nur',
    surname: 'Kök',
    birthYear: 1997
});

person.save();