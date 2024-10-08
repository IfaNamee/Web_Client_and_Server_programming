/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

console.log('--------------- Question A ------------') // prompty.
console.log() // Print new space to make easy to read.

// TODO Extract the latitude value, and log it to the console.
let latitude = iss_location.iss_position.latitude; // variable to get info. 
console.log('Latitude:', latitude);  // Display message.

// TODO Extract the longitude value, and log it to the console.
let longitude = iss_location.iss_position.longitude; // variable to get info. 
console.log('Longitude:', longitude)  // Display message.
console.log() // Print new space to make easy to read.

console.log('--------------- Question B ------------') // prompty.
console.log() // Print new space to make easy to read.

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787  // Add new property with value.
console.log(rates)

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)

console.log() // Print new space to make easy to read.

let Euros = 100  // variable
let equivalent = Euros * rates.AUD  //variable and exchange formual 
console.log('100 Euros equivalent to Australian Dollars (AUD) is: ' + equivalent)  // Print message


console.log() // Print new space to make easy to read.
console.log('--------------- Question C --------------') // prompty.
/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"}) // push new propery name and value9cat name) to the object.
console.log(cats_and_owners) // print array list with new propery.
console.log()

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
// Each line should have a message like "Snoop Dogg's cat is called Miles Davis"

cats_and_owners.forEach( function (nameCat){  // loop for each list 
    console.log(nameCat.name + '\'s cat is called ' + nameCat.cat)
})
console.log() // Print new line to make easy to read.

// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
console.log('Gary Oldman\'s cat ' + cats_and_owners[1].cat); // print gary cat using [] notation.

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
cats_and_owners.forEach( function (nameCat){ // loop for each list
   if (nameCat.name === "Gary Oldman") {   // check if name is gary oldmen.
    console.log(`Gary Oldman's cat ${nameCat.cat}`)  // print gary's cat name
   }
})


console.log() // Print new space to make easy to read.
console.log('--------------- Question D --------------') // prompty.
/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

// TODO print the full name of the Literature Nobel laureate.

//  Print Fullname using variable step by step
let prizesList = nobel_prize_winners_2017.prizes
// console.log(prizesList)

let LiteratureInfo = prizesList [3] // from element 3 or index 3 * LiteratureInfo is object
// console.log(LiteratureInfo)

let laureateInfo = LiteratureInfo.laureates 
// console.log(laureateInfo)

let fullName = laureateInfo [0]   // from element 0 index 0 * laureateInfo is object
// console.log(fullName) 
console.log('Full name of the Literature Nobel laureate is: ' + fullName.firstname, fullName.surname)

/*

// Print Fullname using ===  easy way
let literatureLaureate = nobel_prize_winners_2017.prizes.find(prize => prize.category === "literature").laureates[0];
console.log(literatureLaureate.firstname, literatureLaureate.surname)

// Print Fullname using elements or indexs easy way
let literatureLaureate2 = nobel_prize_winners_2017.prizes[3].laureates[0];
console.log(literatureLaureate2.firstname, literatureLaureate2.surname)

*/

console.log()
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work -
// - without modification if a laureate was added, or removed

let physicsLaureatesId = nobel_prize_winners_2017.prizes[0].laureates // variable get info through objects.
// Loop through the laureates and print their IDs
console.log('Ids of each of the Physics Nobel laureates.') // prompty.
physicsLaureatesId.forEach(function(laureate) {
    console.log(laureate.id)
  });


console.log()
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

console.log('Names of all the prize categories:') // prompty.
// loop through the prizes array and print the name of each category
let prizeCategories = nobel_prize_winners_2017.prizes // variable
prizeCategories.forEach( function (prize){
    console.log(prize.category)
})

console.log() // break line
// TODO write code to print the total number of prize categories

let totalNumber = nobel_prize_winners_2017.prizes.length  // Get total number of prize categories.
console.log('Total number of prize categories: ' + totalNumber)   // print message.

// TODO write code to count the total number of laureates from 2017. 
// Print the total number of laureates.
console.log() // break line

let totallaureates = 0; // initialize variable counter 
// Loop through each prize category and add the number of laureates
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    totallaureates += prize.laureates.length;
});
console.log("Total number of laureates:", totallaureates);  // print message.
  
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.