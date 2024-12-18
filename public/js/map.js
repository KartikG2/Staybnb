// // ========================= MAP INITIALIZATION ======================
// let map = L.map('map').setView(coordinates, 8);    // first latitude and then logitude

// // ===================== google street maps ==========================
// googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
// maxZoom: 20,
// subdomains:['mt0','mt1','mt2','mt3']
// });

// googleStreets.addTo(map);

// let marker = L.marker(coordinates)  // first latitude and then logitude

// // ===================== popup message on the pin/marker ======================
// let popup = marker.bindPopup("Welcome to Wanderlust").openPopup();
// popup.addTo(map);

// console.log(coordinates)

let map;
let marker;

function initMap(initialCoordinates, zoomLevel) {
  map = L.map('map').setView(initialCoordinates, zoomLevel);

  googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  });

  googleStreets.addTo(map);

  marker = L.marker(initialCoordinates);

  const popup = marker.bindPopup("Exact location provided after booking");
  popup.openPopup();

  marker.addTo(map);

  // Add zoom control (optional)
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);
}

// Assuming coordinates are fetched from elsewhere
const fetchedCoordinates = Coordinates;
const zoomLevel = 8; // Adjust zoom level as needed

initMap(fetchedCoordinates, zoomLevel);

console.log(Coordinates);