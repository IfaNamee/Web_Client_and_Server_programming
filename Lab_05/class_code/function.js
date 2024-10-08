
function shout(text) { 
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}
console.log(shout(shouty_text))

let message = shout('hello web programmers')
console.log(message)

function f_t0_c(f, decimalPlaces) {  // using function to convert f to c
    let celsius = (f-32) * 5/9
    if (decimalPlaces) {  // display with decimals
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}

let todayTemp = 75
todayC = f_t0_c(todayTemp,2)
console.log(todayC)

