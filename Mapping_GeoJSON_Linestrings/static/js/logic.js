// Create tile layer for background of map.
let day = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// create dark tile layer
let night = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);
// create base layer that holds both maps
let baseMaps = {
  Light: day,
  Dark: night
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [night]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing airport GeoJSON url
let torontoData =
  "https://raw.githubusercontent.com/rmckinno/Mapping_Earthquakes/main/torontoRoutes.json";

// Grab data from URL
d3.json(torontoData).then((data) => {
  // create geojson layer
  L.geoJSON(data, {
    color: "#ffffa1",
    weight: 2,
    onEachFeature: (feature, layer) => {
      layer.bindPopup(`<h3>Airport code: ${feature.properties.airline}<hr>
      Destination: ${feature.properties.dst}`);
    }
  }).addTo(map);
});
