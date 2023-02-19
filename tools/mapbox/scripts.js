// html
// <script src='https://api.mapbox.com/mapbox-gl-js/v2.12.0/mapbox-gl.js'></script>

// ---------- mapbox ----------

// mapbox://styles/mapbox/navigation-day-v1
// mapbox://styles/mapbox/navigation-night-v1

mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXJjaHVrIiwiYSI6ImNsZDNkenFxbDAwdGszb21zcnFuYWl4ankifQ.tHZBi_-JEOwXC9XyNWfYYg';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [25.588710697470276,49.54994888139109],
    zoom: 12,
});

// ---------- /mapbox ----------

// mapbox
// const mapNav = document.querySelector('#map');
// mapNav.classList.toggle('active');
// mapNav.classList.remove('active');
// #map.active {opacity: 0;display: none;}

// <div id="map"></div>