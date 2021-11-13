// add console.log to check code
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.6213, -95.3790], 4);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.3, -97.7],
    [43.6861, -79.4658],
    [40.6333, -73.7883]
  ];

// create a red polyline using line coordinates 
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: 6,
}).addTo(map);

// get city data
let cityData = cities;

// Loop through each city and create marker for each
// cityData.forEach(function(city) {
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//          fillColor: "orange"  
//     }).bindPopup(`<h2>${city.city}, ${city.state} </h2> <hr> <h3> Population: ${city.population.toLocaleString()} </h3>`).addTo(map);
//     console.log(city)
//    })


   // Create tile layer for background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 100,
    accessToken: API_KEY
});
// Add 'streets' tile layer to the map.
streets.addTo(map);