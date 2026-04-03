"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// different types of variables.
// type can be omitted and the compiler will infer
let num = 10;
let BigNum = 123_456_798;
let string = 'string';
let bool = true;
let nul_l = null;
let undef = undefined;
let tuple = [1, "test"]; // must be 2 elements
var ShirtSize;
(function (ShirtSize) {
    ShirtSize[ShirtSize["Small"] = 0] = "Small";
    ShirtSize[ShirtSize["Medium"] = 1] = "Medium";
    ShirtSize[ShirtSize["Large"] = 2] = "Large";
})(ShirtSize || (ShirtSize = {})); // automatically set value of small to 0 and medium to 1 and so forth
var PantSize;
(function (PantSize) {
    PantSize["Small"] = "s";
    PantSize["Medium"] = "m";
    PantSize["Large"] = "l";
})(PantSize || (PantSize = {})); // can also set to other custom value. must set all values of enum
let mySize = PantSize.Medium;
console.log(mySize);
// structures
//array elements can be any type unless specified
let NumArr = [1, 2, 3];
let arr = [1, 2, "chicken"];
// loops
NumArr.forEach;
// functions
// can specify return type or have it guess depending on return type
// by default, always returns undefined
function calculateTax(income) {
    return income;
}
function calculateTax2(income, year) {
    return income + year;
}
// create optional parameter with default value if number of arguments does not match parameters
function optionalParameter(income, optional = 2022) {
    return income + optional;
}
// pass exact argument as parameters
calculateTax(10_000);
calculateTax2(10_000, 2022);
optionalParameter(1000);
optionalParameter(10_000, 2345);
// objects
// objects are not dynamic in typescript. once created, cannot add or remove properties
let employee = { id: 1 };
let person = {
    id: 1,
    name: "Thomas",
    retireFunction: (date) => {
        console.log(date);
    }
};
let dude = {
    id: 1,
    name: "Thomas",
    retireFunction: (date) => {
        console.log(date);
    }
};
// union type
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === 'number') {
        return weight * 2.2; // will interpret weight as number
    }
    else { // 
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
// literal type
let mass = 50; // value can be 50 or 100
let quantity = 100;
// Nullable types
function greet(name) {
    if (name) { // checking if name has value. using truthiness of value
        console.log(name.toUpperCase());
    }
    else {
        console.log("hi");
    }
}
greet(null); // would throw error with just string as parameter type, but can union types to allow null
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
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
let log = (message) => console.log(message);
//# sourceMappingURL=index.js.map