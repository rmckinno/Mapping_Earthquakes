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
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing latest earthquake GeoJSON url
let earthquakes =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// Grab data from URL
d3.json(earthquakes).then((data) => {
  //console.log(data);
  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into a function
  // to calculate the radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5,
    };
  }
  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
  
// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}

  // create geojson layer
  L.geoJson(data, {
    
    // Turn each feature into a circleMarker on the map.
    pointToLayer:((feature, latlng) => {
      console.log(data);
      return L.circleMarker(latlng);
    }),
    // Set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    onEachFeature: ((feature,layer) =>{
      layer.bindPopup(`Magnitude: ${feature.properties.mag}<br>Location: ${feature.properties.place}`)
    })
  }).addTo(map);
});
