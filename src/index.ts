// different types of variables.
// type can be omitted and the compiler will infer
let num: number = 10;
let BigNum = 123_456_798;
let string: string = 'string';
let bool = true;
let nul_l = null;
let undef = undefined;
let tuple: [number, string] = [1, "test"] // must be 2 elements
enum ShirtSize { Small, Medium, Large } // automatically set value of small to 0 and medium to 1 and so forth
const enum PantSize { Small = 's', Medium = 'm', Large = 'l' } // can also set to other custom value. must set all values of enum
let mySize = PantSize.Medium;
console.log(mySize);

// structures

//array elements can be any type unless specified
let NumArr: number[] = [1,2,3]
let arr = [1,2,"chicken"]


// loops

NumArr.forEach


// functions
// can specify return type or have it guess depending on return type
// by default, always returns undefined
function calculateTax (income: number){
    return income;
}
function calculateTax2 (income: number, year: number): number{
    return income + year;
}
// create optional parameter with default value if number of arguments does not match parameters
function optionalParameter (income: number, optional = 2022): number{
    
    return income + optional;
}
// pass exact argument as parameters
calculateTax(10_000);
calculateTax2(10_000, 2022);
optionalParameter(1000);
optionalParameter(10_000, 2345);


// objects
// objects are not dynamic in typescript. once created, cannot add or remove properties
let employee = {id: 1};
let person: { // enumerate exact fields for object
    readonly id: number, // make property read only to prevent editing property
    name: string,
    height?: string // optional property
    retireFunction: (date: Date) => void
} = {
    id: 1, 
    name: "Thomas", 
    retireFunction: (date: Date) => { // function implementation
        console.log(date);
    }
}


// Advanced Types
type Employee = { // type alias. give defined shape for Employee type
    readonly id: number, // make property read only to prevent editing property
    name: string,
    height?: string // optional property
    retireFunction: (date: Date) => void
}

let dude:Employee = { // enumerate exact fields for object
    id: 1, 
    name: "Thomas", 
    retireFunction: (date: Date) => { // function implementation
        console.log(date);
    }
}


// union type
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === 'number'){
        return weight * 2.2; // will interpret weight as number
    }
    else { // 
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');


// intersection
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = { // to initialize, implement all members of each object
    drag: () => {},
    resize: () => {}
};


// literal type
let mass: 50 | 100 = 50; // value can be 50 or 100

type Quantity = 50 | 100; // can also create custom type with type alias 
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch'; // literal type can be string too

// Nullable types
function greet(name: string | null) {
    if (name){ // checking if name has value. using truthiness of value
        console.log(name.toUpperCase());
    }
    else{
        console.log("hi");
    }
}
greet(null); // would throw error with just string as parameter type, but can union types to allow null


// optional chaining
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null {
    return id===0 ? null : { birthday: new Date() } ;
}

let customer = getCustomer(0); // return undefined
// console.log(customer.birthday); // would cause error since it could be null and would be unable to access property
// can use if to check null value, but can do better

// optional property access operator
// will run code only if customer is not null, prints, returns null
console.log(customer?.birthday); // print undefined
let customer1 = getCustomer(1);
console.log(customer1?.birthday); // print date

// optional element access operator
// instead of checking if array is not null or undefined before accessing an element, do this:
// customers?.[0]

// optional call operator
let log: any = (message: string)  => console.log(message);