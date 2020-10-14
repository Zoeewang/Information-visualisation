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

var transports = ["bus","tram"];
var transportLyaers = {"bus":"zwwang4.d6fbwpyn", "tram":"zwwang4.df9decyn"};
var transportName = {"bus": "bus_stop-bisgow", "tram":"tram_stop-1wfy70"};
var transportColor = {"bus": "#de8282", "tram":"#668cff"};
function addTransportLayer(transport) {
    // console.log(transport);
    // console.log(transportName[transport]);
    // console.log(transportLyaers.transport);
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
    }
});



// set up the corresponding toggle button for each layer
for (var i = 0; i < transports.length; i++) {
    var id = transports[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

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

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}