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

// create satellite street tile layer
let satelliteStreets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);
// create base layer that holds both maps
let baseMaps = {
  Streets: streets,
  "Satellite Street": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing toronto neighborhoods GeoJSON url
let torontoHoods =
  "https://raw.githubusercontent.com/rmckinno/Mapping_Earthquakes/main/torontoNeighborhoods.json";
// Grab data from URL
d3.json(torontoHoods).then((data) => {
  console.log(data);
  // create geojson layer
  L.geoJSON(data, {
    color: "blue",
    weight: 1,
    fillColor: "yellow",
    fillOpacity: 0.2,
    onEachFeature: (feature, layer) => {
      layer.bindPopup(`<h3>${feature.properties.AREA_NAME}</h3>`);
    }
  }).addTo(map);
});
