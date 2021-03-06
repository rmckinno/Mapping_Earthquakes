# Mapping_Earthquakes
Using Using JavaScript and API requests to visualize earthquakes around the world

## Built with
- JavaScript(D3.json)
- Leaflet
- Mapbox API
- HTML
- CSS

## Overview
 
 <img align="right" src="Earthquake_Challenge/static/images/alllayers.png"  width="400"> The purpose of this project is to create a map with multiple layers to track earthquakes globally. 
The map was created with three base tile layers from https://docs.mapbox.com/api/maps/styles/#mapbox-styles. Streets, Satellite Streets, and Dark tile layers were chosen for this map. They are added by creating map objects with Leaflet.
In the image, there is a a control feature to toggle between those three base layers. To visualize the earthquakes and tectonic plates on the map d3.json makes two calls to https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php to get all earthquakes of any magnitude and earthquakes with a magnitude of 4.5 or greater in the past seven days. 
A call is also made to https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json to get tectonic plate data. Each dataset is mapped and added as a layer group using Leaflet. The layer group allows different information to toggle on or off at the same time or not. This is demonstrated in the three map images below. <img align="left" src="Earthquake_Challenge/static/images/toggle.png" width="650">