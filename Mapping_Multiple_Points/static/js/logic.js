// add console.log to check code
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// get city data
let cityData = cities;

// Loop through each city and create marker for each
cityData.forEach(function(city) {
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
         fillColor: "orange"  
    }).bindPopup(`<h2>${city.city}, ${city.state} </h2> <hr> <h3> Population: ${city.population.toLocaleString()} </h3>`).addTo(map);
    console.log(city)
   })


   // Create tile layer for background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add 'streets' tile layer to the map.
streets.addTo(map);