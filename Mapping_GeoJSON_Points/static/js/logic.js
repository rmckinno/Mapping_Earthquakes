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

// create dark tile layer
let dark = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);
// create base layer that holds both maps
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

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
