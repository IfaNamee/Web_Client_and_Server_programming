let text = 'The classes are itec 1150, itec 1250, itec 2560'  // variable

let replaced = text.replace('itec', 'ITEC')  // variable
console.log(replaced) // replace only first single word on text.

let replacedAll = text.replace(/itec/g, 'ITEC') // variable
console.log(replacedAll) // replace All 'itec' in sentence.

let message = 'The classes are 1150, 1250, 2560' // variable
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&') // Replace all four digits 'ITEC' in front.
console.log(replaceRegex)


