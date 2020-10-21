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

let place_of_interest = ["cafe/restaurant", "free and cheap support service","Land Marks and place of interest", "Public memorials and sculptures"];
let poiLayers = {"cafe/restaurant":"zwwang4.8ikyb6d5", "free and cheap support service":"zwwang4.5ylprpgw",
    "Land Marks and place of interest":"zwwang4.aqh2rqg0", "Public memorials and sculptures":"zwwang4.9967w9b4"};
let poiName = {"cafe/restaurant":"cafe_restaurant_bistro_seats-bab3y3", "free and cheap support service":"free_and_cheap_support_servic-b4hdm5",
    "Land Marks and place of interest":"Landmarks_and_places_of_inter-5aaj26", "Public memorials and sculptures":"public_memorials_and_sculptur-6btkbm"};
let poiColor = {"cafe/restaurant":"#00ccff", "free and cheap support service":"#00ccff","Land Marks and place of interest":"#00ccff", "Public memorials and sculptures":"#00ccff"};


let convenience_facilities = ["Barbeque", "Bicycle Rails","Drinking fountains","Hoop", "Information Pillar","Picnic setting","Public toilet","Seat","Little bin"];
let cfLayer={"Barbeque":"zwwang4.3lg4xep6", "Bicycle Rails":"zwwang4.2oqn7jli","Drinking fountains":"zwwang4.clemipy3","Hoop":"zwwang4.b196630g",
    "Information Pillar":"zwwang4.0v4u2916","Picnic setting":"zwwang4.3cdmpl2k","Public toilet":"zwwang4.3r82pcrj","Seat":"zwwang4.99fbrhc9","Little bin":"zwwang4.3k5d7av3"};
let cfName ={"Barbeque":"barbeque-cuezqy", "Bicycle Rails":"bicycle_rails-4l7cci","Drinking fountains":"drinking_fountains-8c61v0","Hoop":"Hoop-4hy87x",
    "Information Pillar":"Information_Pillar-a2pns0","Picnic setting":"Picnic_setting-4y2oya","Public toilet":"public_toilets-19xbh5","Seat":"seat-64bqae","Little bin":"litter_bin-9872ti"};
let cfColor = {"Barbeque":"#996600", "Bicycle Rails":"#996600","Drinking fountains":"#996600","Hoop":"#996600", "Information Pillar":"#996600","Picnic setting":"#996600","Public toilet":"#996600","Seat":"#996600","Little bin":"#996600"}

let special_areas = ["Playground","Outdoor non-smoke zone", "Dog walking zone"];
let special_areas_Layer = {"Playground":"zwwang4.2kzweoh4","Outdoor non-smoke zone":"zwwang4.0kcs10go","Dog walking zone":"zwwang4.2bbudk19"}
let special_areas_Name = {"Playground":"playgrounds-4qz9zw","Outdoor non-smoke zone":"outdoor_non-smoking_zones-0cy6cs", "Dog walking zone":"dog_walking_zones-7rk1re"}
let special_areas_Color = {"Playground":"#a3a3c2","Outdoor non-smoke zone":"#a3a3c2", "Dog walking zone":"#a3a3c2"}

function addLayer(transport,transport_layer, transport_name,transport_color) {
    map.addLayer({
        id: transport,
        type: "circle",
        'source-layer': transport_name,
        source:{
            type: 'vector',
            url:("mapbox://")+transport_layer
        },
        "paint":{"circle-color":transport_color}
    })
}

function addFillLayer(name, layer, layer_name, layer_color){
    map.addLayer({
        id: name,
        type: "fill",
        'source-layer': layer_name,
        source:{
            type: 'vector',
            url:("mapbox://")+layer
        },
        "paint":{"fill-color":layer_color}
    })
}

map.on("load", function(){
    var x;
    for(x of transports){
        addLayer(x,transportLyaers[x], transportName[x], transportColor[x]);
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

    for(x of place_of_interest){
        addLayer(x, poiLayers[x],poiName[x],poiColor[x]);
        map.setLayoutProperty(x, "visibility", "none");
    }

    for(x of convenience_facilities){
        addLayer(x,cfLayer[x], cfName[x], cfColor[x]);
        map.setLayoutProperty(x, "visibility","none");
    }

    for(x of special_areas){
        addFillLayer(x,  special_areas_Layer[x], special_areas_Name[x], special_areas_Color[x]);
        map.setLayoutProperty(x, "visibility", "none");
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
setCorrespondingButton(place_of_interest, "poi_menu");
setCorrespondingButton(convenience_facilities, "cf_menu");
setCorrespondingButton(special_areas, "sa_menu")
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
    document.getElementById("menu").classList.toggle("show");
}

function poi_Buttons(){
    document.getElementById("poi_menu").classList.toggle("show");
}

function cf_Buttons(){
    document.getElementById("cf_menu").classList.toggle("show");
}

function sa_Buttons(){
    document.getElementById("sa_menu").classList.toggle("show");
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
