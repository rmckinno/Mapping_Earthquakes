// add console.log to check code
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add marker for LA, Ca
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// place circle on LA
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "yellow"
    
 }).addTo(map);

// Create tile layer for background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add 'streets' tile layer to the map.
streets.addTo(map);