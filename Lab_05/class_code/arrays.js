let animals = ['lion', 'tiger', 'cheetah']
console.log(animals)
console.log(animals[1]) // print tiger

animals[3] = 'giraffe' // add array list by specifying 
console.log(animals)
console.log(animals[5]) // undefined

animals[1] = 'zebra' // replace array list
console.log(animals)
console.log(animals[1])

animals.push('elephant') // add array list at the end of list
console.log(animals)

animals.unshift('deer')  //  add to the beginning of an array and returns the new length of the array.
console.log(animals)

let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)

animals.reverse()  // reverse order
console.log(animals)

animals.sort() // sort by letter
console.log(animals)

let numberOfAnimals = animals.length // count total animals in array
console.log(numberOfAnimals)

console.log(animals.indexOf('giraffe')) // index of array where the of gifaffe are.

console.log(animals.indexOf('walrus')) // Print -1 bc walrus not in array. instead of undefined.

if (animals.indexOf('walrus') == -1) {  // print if walrus is not in array
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {  // print if cheetah is in array.
    console.log('cheerah is the array')
}

console.log(animals.join(' # ')) // join array with what identify in ( ).

animals.forEach( function (animals) {  // Print nt each animals in array with upper case
    console.log(animals.toUpperCase())
})

animals.forEach (function(animal) {  // Print nt each animals in array
    console.log(animal.length)
})

animals.push('alligator') // add new animal 

let animalNameLength = []  // To print each animal name length in to array.
animals.forEach( function (animal) {
    let length = animal.length
    animalNameLength.push(length)
})
console.log(animalNameLength)