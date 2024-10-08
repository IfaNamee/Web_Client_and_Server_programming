console.log('-----------ZIP CODE----------------')
function isMinnesotaZip(code) {
    // All MN zip are between these 55001 and 56763
    if (code >= 55001 && code <= 56763) {  // Using && weather number is range between.
        return true 
    } else {
        return false
    }
        
}


console.log(isMinnesotaZip(55403)) // variable 
console.log(isMinnesotaZip(95555))  // variable 
console.log(isMinnesotaZip(3)) // variable 
console.log(isMinnesotaZip(55555)) // variable 

console.log('-----------GPA----------------')

function validGPA(gpa) {   // Using && condition weather number is range between. 
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

console.log(validGPA(5)) // variable
console.log(validGPA(3)) // variable
console.log(validGPA(1)) // variable
console.log(validGPA(-3)) // variable

console.log('-----------CITY and State----------------')

function cityStateAddress(city, State) {
    let address = city + ', ' + State.toUpperCase() // separeate variables by identfy in ' '.
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))  // variable
console.log(cityStateAddress('Saint Paul', 'MN'))
