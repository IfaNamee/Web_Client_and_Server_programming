console.log('Hello world!')

// Three ways to create variable
let color = 'blue'
var size = 'medium' // not recommended 
const language = 'JavaScript'  // can change this value.

let quantity = 5  // variable
let distance = 4.5 // variable

let text = 'Hello World' // variable
let message = 'Hi programmers' // variable

console.log(quantity, text, message) // display message 

let todayTemp = 75  // variable

console.log('Today\s temperature is ' + todayTemp + 'F')

// formal of C temperature to F
let tempC = (todayTemp - 32) * 5/9 
console.log('Today\s temperature is ' + tempC.toFixed(2) + 'C') // display with 2 decimal.
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F`) // display message

let className = 'Web Programming' // variable
let classCode = 2560 // variable
let departement = 'ITEC' // variable

console.log(`This class is ${departement} ${classCode} ${className}`) // display message by using Backtick `` 
