// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([30, 30], 2);

// Create tile layer for background of map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);
// Add 'streets' tile layer to the map.
streets.addTo(map);

// Accessing airport GeoJSON url
let airportData =
  "https://raw.githubusercontent.com/rmckinno/Mapping_Earthquakes/main/majorAirports.json";

// Grab data from URL
d3.json(airportData).then((data) => {
  // create geojson layer
  L.geoJSON(data, {
    onEachFeature: (feature, layer) => {
      layer.bindPopup(`<h3>Airport code: ${feature.properties.faa}<hr>
    Airport name: ${feature.properties.name}`);
    }
  }).addTo(map);
});
