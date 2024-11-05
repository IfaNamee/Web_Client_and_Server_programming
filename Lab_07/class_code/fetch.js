let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let timeIssLocationFetched = document.querySelector('#time')
let issLat = document.querySelector('#iss-lat')
let isslong = document.querySelector('#iss-long')

let update = 10000 // Variable to set update time on 10 second
let maxFailedAttempts = 3  // variable to limit attempts numbers.
let issMarker  

let icon = L.icon({  // set ISS icon picture.
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],  // icon size
    iconAnchor: [25, 25] // icon start point.
})

let map = L.map('iss-map').setView([0,0], 1)
// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

iss(maxFailedAttempts) // call function one time to start.
// setInterval(iss, update)  // update every 10 second 

function iss(attempts) {

    if (attempts <= 0) {
        alert('Failed to contect ISS server after serveral attempts')
    }

// Fetch data from the API
    fetch(url).then( res => {
        return res.json()  // Convert the response to JSON format
    }).then( (issData) => {
        console.log(issData)  // display on console
        let lat = issData.latitude  // Extract the latitude from the API data
        let long = issData.longitude // Extract the longitude from the API data
        issLat.innerHTML = lat   // Display the latitude on the webpage
        isslong.innerHTML = long // Display the longitude on the webpage

        // create marker if it doesn't exist
        // move marker if it does exist
        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: icon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long])
        }

        let now = Date()
        timeIssLocationFetched.innerHTML = `${now}` // or `This data was ferchec at ${now}`

    }).catch( (err) => { // any errors that occur during the fetch process
        attempts-- // subtract 1 from number of attempts.
        console.log("ERROR!", err)  // display on console
    }).finally( () => {
        setTimeout(iss, update, attempts)  // update every 10 second 
    })
}

/*  More INFO work with API
    List here https://github.com/public-apis/public-apis
    Tips for working with APIs on pages
    Use the free APIs which don't need authentication or keys, since you won't 
    be able to keep those secret Only APIs that use HTTPS work on GitHub pages 
*/