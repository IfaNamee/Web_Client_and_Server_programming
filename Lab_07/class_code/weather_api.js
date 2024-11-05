let weatherApiUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

fetch(weatherApiUrl).then(res => {
    // response is bytes of data
    // need to the response's data and convert to
    // Json - javascript objects and arrays our program can use
let jsonProcessing = res.json()

    return jsonProcessing // .json built-in JS method.

}).then(pro => {
    console.log(pro)
})