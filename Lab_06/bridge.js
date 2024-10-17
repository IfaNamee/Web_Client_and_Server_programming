let usCoordinates = [37.8, -96];  // center point of the United States coordinate
let zoomLevel = 4;  // Entire US zoom level

let map = L.map('bridge-map').setView(usCoordinates, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create an array to hold the bridges info
let bridges = [
    {"name": "Verrazzano-Narrows Bridge", "city_state": "New York, NY", "span": 1298.4, "location": [40.6066, -74.0447], "pictures": "verra.jpg"},
    {"name": "Golden Gate Bridge", "city_state": "San Francisco and Marin, CA", "span": 1280.2, "location": [37.8199, -122.4783], "pictures": "Gold_bridge.jpg"},
    {"name": "Mackinac Bridge", "city_state": "Mackinaw and St Ignace, MI", "span": 1158.0, "location": [45.8174, -84.7278], "pictures": "makin.jpg",},
    {"name": "George Washington Bridge", "city_state": "New York, NY and New Jersey, NJ", "span": 1067.0, "location": [40.8517, -73.9527], "pictures": "Washi.jpg",},
    {"name": "Tacoma Narrows Bridge", "city_state": "Tacoma and Kitsap, WA", "span": 853.44, "location": [47.2690, -122.5517], "pictures": "Taco.jpg",}
];

// Add Event listener to load pictures fast.
window.addEventListener('load', function () { 
    
    // Create an array to hold the picture.
    let pictures = [
        { name: "pic1", src: 'verr.jpg'},           //  Verrazzano-Narrows Bridge picture
        { name: "pic2", src: 'Gold_bridge.jpg'},    // Golden Gate Bridge picture
        { name: "pic3", src: 'makin.jpg'},          // Mackinac Bridge picture
        { name: "pic4", src: 'Washi.jpg'},          // George Washington Bridge picture
        { name: "pic5", src: 'Taco.jpg'}            // Tacoma Narrows Bridge picture
    ];

    // Preload images
    pictures.forEach(pic => {   // loop each picture 
        let img = new Image();  // get new picture 
        img.src = pic.src;      // 
        pic.image = img;        // Store the Image object in the picture object
    });

    // Find the bridge with the longest span
    let longestBridge = bridges.reduce((max, bridge) => bridge.span > max.span ? bridge : max, bridges[0]);

    let bridgeIcon = L.icon({     // get Icon from Leaflet JavaScript library
        iconUrl: 'bridge1.png',   // Path to your custom bridge icon image
        iconSize: [45, 45],       // Set the size of the icon [width, height]
        iconAnchor: [16, 32],     // Anchor the icon at the bottom center
        popupAnchor: [0, -32]     // Position of the popup relative to the icon
    });

    let longestBridgeIcon = L.icon({   // get Icon from Leaflet JavaScript library
        iconUrl: 'bridge2.png',        // Path to your custom longest bridge icon image
        iconSize: [45, 45],            // Set the size of the icon [width, height]
        iconAnchor: [16, 32],          // Anchor the icon at the bottom center
        popupAnchor: [0, -32]          // Position of the popup relative to the icon
    });

    // Loop through the bridges and add markers with appropriate icons
    bridges.forEach(function (bridge) {
        let markerMap = `<b>${bridge.name}</b> <br>${bridge.span} meters <br>
        <img src='${bridge.pictures}' width='200' height='150'>`; // add picture and set size

        // Use the special icon for the longest bridge
        let iconToUse = (bridge.name === longestBridge.name) ? longestBridgeIcon : bridgeIcon;

        // Create a marker with the custom bridge icon and bind the popup
        L.marker(bridge.location, { icon: iconToUse })  
            .bindPopup(markerMap)  // marker or picture on map 
            .addTo(map);  // add on map
    });
});

// Start chart elements.
let canvas = document.querySelector('#bridge-chart');
let context = canvas.getContext('2d');

let bridgeNames = bridges.map(bridge => bridge.name);  // get bridge name from bridge array.
let bridgeSpans = bridges.map(bridge => bridge.span);  // get bridge span from bridge array.

let chart = new Chart(context, {   // create chart
    type: 'bar',   // set or choose chart type.
    data: {       // set data 
        labels: bridgeNames,  // get bridge name for each.
        datasets: [{
            label: 'Longest bridge in US',  // prompty.
            data: bridgeSpans,  // get bridge span for each.
            backgroundColor: ['gray', 'orange', 'lightgreen', 'brown', 'red'] // Set colors
        }]
    },
    options: {  // This set data to start from zero.
        scales: {
            yAxes: [{  // This y axies latest 'y' not 'yAxes'
                ticks: {
                    beginAtZero: true  // set start point zero.
                }
            }]
        }
    }
});