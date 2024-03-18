// VARIABLES
// variables -> string, boolean, multiple types, arrays, objects, any type
let variable = "hello"; // type of this variable is string and it cannot be another type

let ageType: number;
let ageType2: number = 1;
let x: number | string;

// define array types
let testArray : string[]

// define unionarray types
let testArray2 : (string | number)[]

// object
let user = {
    name: "john",
    age: 27,
    isStudent: false
}

// change object user name
user.name = "Jane"

// define object
let user2 : {
    name: string,
    age: number,
    isStudent: boolean
}

user2 = {
    name: "Jake",
    age: 26,
    isStudent: false
    // we have to use all properties and we cannot change them
}

// An example we have users but some of these users have phone num but others dont have 
// In this situation we use conditions
let user3 : {
    name: string,
    age: number,
    isStudent: boolean,
    phoneNum?: string 
}

// any type its gonna be nmber, string, boolean, object, array
// we should use this type ony when we are not sure about the type
let testAny; // or let testAny: any;
testAny = 12;
testAny = "Johnny"
testAny = [true]

// any with array
let testAnyArray: any[];


// FUNCTIONS
let func = () => { // let func: () => void -> this means its not returning any specific type like numer or string
    console.log("Hello")
}

// retuning 
let funcReturn = (): string => {
    return "John Doe"
}

// take an argument
let sum = (num: number) /*only (num) is any type*/ => {
    return num + 1;
} 

// sum and sum2 functions are exactly the same
let sum2 = (num: number): number => {
    return num + 1;
} 

// dont return anything
let sum3 = (num: number): void => {
    // do something but dont return
    // return num + 1;
} 

// multiple parameters
let multiParameter = (num: number, num1: number) => {
    return num + num1;
} 
multiParameter(1,2)

// adding another paramether but its not required
let multiParameter2 = (num: number, num1: number, num3?: number) => {
    return num + num1;
}
multiParameter2(1,2)


// TYPE ALIASES
// we can create our custom types

type UserType = {
    username: string,
    age:number,
    phone?: string
}

// normal way
let func2 = (user: {username: string, age: number, phone?: string}) => {
    console.log(user.username)
}

// with aliases
let func2better = (user: UserType) => {
    console.log(user.username)
}

// function signature
type myFunc = (num: number, str: string) => void

let write: myFunc = (num, str) => {
    console.log(num);
    console.log(str);
}

type UserType2 = {
    username: string,
    age:number,
    phone?: string,
    theme: "dark" | "light"
}

const withTheme: UserType2 = {
    username: "john",
    age: 27,
    theme: "dark" // it has to be dark or light
}


// INTERFACES