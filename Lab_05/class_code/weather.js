let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,            // Current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,     // I want this info - wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",   // description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",  // description
                    "icon": "09d"
                }
            ]
        }
    ]
}

// Extract current temperature, step-by-step
let weatherList = weather.list  // to get weather list
// console.log(weatherList)

let weatherInfo = weatherList[0]  
// console.log(weatherInfo)

let main = weatherInfo.main
// console.log(main)

let wind = weatherInfo.wind  // to get wind 
let speed = wind.speed      // to get speed from wind.
console.log('Current wind speed is ' + speed)

let currentTemp = main.temp  // to get temperature step by step.
console.log('The current temperature is ' + currentTemp)    // and there's the temp!

// Or, combine all these steps into one 
// test this type of code and make sure you don't miss a step.
let temp = weather.list[0].main.temp   // to get tempurature.
// console.log(temp)

let decriptions = []

let weatherDescriptinonArray = weatherInfo.weather   // loop each decription
weatherDescriptinonArray.forEach ( function(weatherDescription) {
//    console.log(weatherDescription.description)
    decriptions.push(weatherDescription.description)
})

let descriptionsString = decriptions.join(', ')  
console.log('The weather is ' + descriptionsString)

