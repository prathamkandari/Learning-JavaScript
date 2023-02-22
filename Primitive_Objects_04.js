// nn bb ss u
// null number boolean bigint String Symbol Undefined -> These are the 7 primitive data types of Js

let a = null;
let b = 345;
let c = true;
let d = BigInt("10") + BigInt("1")
let e = "Pratham"
let f = Symbol("My name is Pratham Kandari")
let g = undefined
console.log(a, b, c, d, e, f, g);
console.log(typeof(d))

// Objects in Js
// Constants are similar to dictionaries in python 
// Constants have key and value pairs
const item = {
    "Pratham": true,
    "Kandari": false,
    "Lovish": 22,
    "Rohan": undefined
}
console.log(item["Kandari"])