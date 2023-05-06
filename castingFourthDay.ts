let value1 :any = "my value";
//first way for casting
let value2= <Object>value1;

//second way for casting
let value3= value1 as number

console.log(typeof value2 , value2)
console.log(value2.hasOwnProperty("d"))
console.log(Object.keys(value2))

// console.log(value3.)
console.log(value3.toString())

//Assertion - Expicit