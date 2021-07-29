const map = L.map('map-template').setView([51.505, -0.09], 13);

const socket = io();

// Direccion del mapa de leaflet
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileURL).addTo(map);

map.locate({enableHighAccuracy: true });
map.on('locationfount', e => {
    const coord = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coord);
    marker.bindPopup('Tu estas aquí');
    map.addLayer(marker);
    socket.emit('userCoordinates', e.latlng);
});

const marker = L.marker([51.505, -0.09]);
marker.bindPopup('Direccion');
map.addLayer(marker);