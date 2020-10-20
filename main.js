mapboxgl.accessToken = 'pk.eyJ1Ijoiend3YW5nNCIsImEiOiJja2Z5eXF5ZmIwN2d3MnlvMWthNXV0eDY1In0.N-0Dr177HFqwX9_VxWsy_g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zwwang4/ckg4vdgns0gb819tl89k5etnj', // stylesheet location
    center: {lat: -37.814, lng: 144.969}, // starting position [lng, lat]
    zoom: 13 // starting zoom
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)

//add map layer information, includes the name, id of tge map tilesets from mapbox studio and the color that the dots in the map
let transports = ["bus","tram","train","sky bus","night bus"];

let transportLyaers = {"bus":"zwwang4.d6fbwpyn", "tram":"zwwang4.df9decyn","train":"zwwang4.5zoco9pq","sky bus":"zwwang4.bkxr7mi6","night bus":"zwwang4.9karz3fu"};
let transportName = {"bus": "bus_stop-bisgow", "tram":"tram_stop-1wfy70","train":"train_station-1i70n4","sky bus":"sky_bus_stop-7qf27q","night bus":"night_bus_stop-asvh8x"};
let transportColor = {"bus": "#de8282", "tram":"#668cff","train":"#ffcc00","sky bus":"#66ff33","night bus":"#ff6600"};
function addTransportLayer(transport) {
    map.addLayer({
        id: transport,
        type: 'circle',
        'source-layer': transportName[transport],
        source:{
            type: 'vector',
            url:("mapbox://")+transportLyaers[transport]
        },
        "paint":{"circle-color":transportColor[transport]}
    })

}

map.on("load", function(){
    var x;
    for(x of transports){
        addTransportLayer(x);
        map.setLayoutProperty(x, 'visibility','none');
        let color = transportColor[x];
        let item = document.createElement('div');
        let key = document.createElement('span');
        let legend = document.getElementById("legend");
        key.className = 'legend-key';
        key.style.backgroundColor = color;
        let value = document.createElement('span');
        value.innerHTML = x;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);

    }

    map.addControl(new mapboxgl.NavigationControl());

});



map.on('mousemove', function(e) {
    // Change the icon to a pointer icon when you mouse over a building
    mouseMove(transports);
});

mouseClick(transports);

function mouseMove(layers){
    var layer;
    for(layer of layers){
        map.on('mouseenter', layer, function() {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pan icon when it leaves.
        map.on('mouseleave', layer, function() {
            map.getCanvas().style.cursor = '';
        });
    }
}

function mouseClick(layers){
    var layer;
    for(layer of layers){
        map.on('click', layer, function(e){
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('Stop: ' + e.features[0].properties.STOP_ID + '<br>' + e.features[0].properties.STOP_NAME)
                .addTo(map);
        });
    }
}

//creating the buttons to control the visibility of the each map layer
setCorrespondingButton(transports, 'menu');
// set up the corresponding toggle button for each layer
function setCorrespondingButton(transports, menu){
    for (var i = 0; i < transports.length; i++) {
        var id = transports[i];
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = id;
        console.log(link.textContent);
        link.onclick = function (e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

// toggle layer visibility by changing the layout object's visibility property
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
        };

        var layers = document.getElementById(menu);
        layers.appendChild(link);
        link.className = '';
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function transportButtons(){
    document.getElementById('menu').classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
