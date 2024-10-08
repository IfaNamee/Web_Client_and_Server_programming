let birds = ['Owl', 'Robin', 'Eagle'] // content list 
console.log(birds)

birds.forEach( function (bird, index) {
    // repeat once for the object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})
// Traditional for loop for each bird and index number.
for (x = 0; x < birds.length; x++) {
    let bird = birds[x]
    console.log(x, bird)
}
