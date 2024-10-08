// pre-requisites for android programming - C# or Java
let takenJava = true // variable
let takenCsharp = true // variable

// using '||' conditions to check weather one condition is true or both true
if (takenCsharp || takenJava) {  
    console.log('You meet the pre-requisites for Android')
} else {  // weather both conditions false
    console.log('You must take C# or Java')
}

// To be a senator, there are 3 thing requirements

let age = 35  // variable
let usCitizenTime = 35  // variable
let stateOfResidence = 'Wisconsin'  // variable
let stateWantToRepresent = 'Minnesota' // variable

// using '&& and ===' conditions to check weather all condition is true.
if (age >= 35 && usCitizenTime && stateWantToRepresent === stateOfResidence) {   
    console.log('You are eligible to be a senator')
} else {  // Print if one or more false
    console.log('You are NOT eligible')
}