mapboxgl.accessToken = 'pk.eyJ1Ijoiend3YW5nNCIsImEiOiJja2dwdW5rbmkwa25wMnJxaXZjZGl3aWJoIn0.cz7Disiu_jwNDozdcG98NQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zwwang4/ckgq6pjoq28t719qhnwjr8gyn', // stylesheet location
    center: {lat: -37.814, lng: 144.969}, // starting position [lng, lat]
    zoom: 13 // starting zoom
});
//
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

var scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});


let direction_on = false;

map.addControl(scale);

scale.setUnit('metric');

// add map layer information, includes the name, id of tge map tilesets from mapbox studio and the color that the dots in the map
let transports = ["Bus","Night bus","Sky bus","Tram","Train"];
let transportLyaers = {"Bus":"zwwang4.d6fbwpyn", "Tram":"zwwang4.df9decyn","Train":"zwwang4.5zoco9pq","Sky bus":"zwwang4.bkxr7mi6","Night bus":"zwwang4.9karz3fu"};
let transportName = {"Bus": "bus_stop-bisgow", "Tram":"tram_stop-1wfy70","Train":"train_station-1i70n4","Sky bus":"sky_bus_stop-7qf27q","Night bus":"night_bus_stop-asvh8x"};
let transportColor = {"Bus": "#f76f49", "Tram":"#69ad4e","Train":"#3a8fb7","Sky bus":"#ffa028","Night bus":"#fe9a7e"};

let transport_route_Layers = {"Bus":"zwwang4.2kz6w0iq","Tram":"zwwang4.44idhdrf","Train":"zwwang4.bis7pf0r","Sky bus":"zwwang4.3urevqi7", "Night bus":"zwwang4.4bjkmit2"};
let transport_route_Name = {"Bus":"bus_route-ae5rku","Tram":"tram_route-a6u7q2", "Train":"train_route-1dlqlx", "Sky bus":"skybus_route-0tepci", "Night bus":"night_bus_route-7e9883"};

let transport_MOC_route_layer = {"Bus":"zwwang4.6bjpwlti", "Tram":"zwwang4.bjjb310v","Sky bus":"zwwang4.5u6zksoh","Train":"zwwang4.8m05ez12","Night bus":"zwwang4.70mf3pir"};
let transport_MOC_route_Name = {"Bus": "bus_route-a48cyh","Tram":"cleaned_tram_routes_in_CoM-chupde", "Sky bus":"sky_bus_routes_in_CoM-1yr863",
                                "Train":"train_routes_in_CoM-626ani", "Night bus":"night_bus_route-b5w1s3"};

let place_of_interest = ["Cafes & restaurants", "Convenient support services","Land Marks & places of interest", "Public memorials & sculptures"];
let poiLayers = {"Cafes & restaurants":"zwwang4.8ikyb6d5", "Convenient support services":"zwwang4.5ylprpgw",
    "Land Marks & places of interest":"zwwang4.aqh2rqg0", "Public memorials & sculptures":"zwwang4.9967w9b4"};
let poiName = {"Cafes & restaurants":"cafe_restaurant_bistro_seats-bab3y3", "Convenient support services":"free_and_cheap_support_servic-b4hdm5",
    "Land Marks & places of interest":"Landmarks_and_places_of_inter-5aaj26", "Public memorials & sculptures":"public_memorials_and_sculptur-6btkbm"};
let poiColor = {"Cafes & restaurants":"#e6a026", "Convenient support services":"#1d95c4","Land Marks & places of interest":"#d66060", "Public memorials & sculptures":"#a1c851"};


let convenience_facilities = ["Barbecue", "Bicycle Rails","Drinking fountains","Hoop", "Information Pillar","Picnic setting","Public toilets","Seats","Little bins"];
let cfLayer={"Barbecue":"zwwang4.3lg4xep6", "Bicycle Rails":"zwwang4.2oqn7jli","Drinking fountains":"zwwang4.clemipy3","Hoop":"zwwang4.b196630g",
    "Information Pillar":"zwwang4.0v4u2916","Picnic setting":"zwwang4.3cdmpl2k","Public toilets":"zwwang4.3r82pcrj","Seats":"zwwang4.99fbrhc9","Little bins":"zwwang4.3k5d7av3"};
let cfName ={"Barbecue":"barbeque-cuezqy", "Bicycle Rails":"bicycle_rails-4l7cci","Drinking fountains":"drinking_fountains-8c61v0","Hoop":"Hoop-4hy87x",
    "Information Pillar":"Information_Pillar-a2pns0","Picnic setting":"Picnic_setting-4y2oya","Public toilets":"public_toilets-19xbh5","Seats":"seat-64bqae","Little bins":"litter_bin-9872ti"};
let cfColor = {"Barbecue":"#dc5757", "Bicycle Rails":"#8facd4","Drinking fountains":"#66beb5","Hoop":"#8facd4", "Information Pillar":"#77abc1","Picnic setting":"#ea943d","Public toilets":"#8d969b","Seats":"#e5b636","Little bins":"#8f8f8f"}

let special_areas = ["Dog walking zones", "Outdoor non-smoke zones", "Playgrounds"];
let special_areas_Layer = {"Playgrounds":"zwwang4.2kzweoh4","Outdoor non-smoke zones":"zwwang4.0kcs10go","Dog walking zones":"zwwang4.2bbudk19"}
let special_areas_Name = {"Playgrounds":"playgrounds-4qz9zw","Outdoor non-smoke zones":"outdoor_non-smoking_zones-0cy6cs", "Dog walking zones":"dog_walking_zones-7rk1re"}
let special_areas_Color = {"Playgrounds":"#ea943d","Outdoor non-smoke zones":"#becf50", "Dog walking zones":"#6ac68f"}

function addLayer(transport,transport_layer, transport_name,transport_color, map) {
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

function addLayerWithZoom(transport,transport_layer, transport_name,transport_color,zoom,map, stroke_color, radius, stroke_width) {
    map.addLayer({
        id: transport,
        type: "circle",
        minzoom: zoom,
        'source-layer': transport_name,
        source:{
            type: 'vector',
            url:("mapbox://")+transport_layer
        },
        "paint":{"circle-color":transport_color,
            "circle-stroke-color": stroke_color,
            "circle-radius": radius,
            "circle-stroke-width": stroke_width}
    })
}


function addFillLayer(name, layer, layer_name, layer_color,map){
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

function addLineLayer(layer, layer_name, layer_color,map, line_width){
    map.addLayer({
        id: layer_name,
        type: "line",
        'source-layer': layer_name,
        source:{
            type: 'vector',
            url:("mapbox://")+layer
        },
        "paint":{"line-color":layer_color,
            'line-width': line_width,
            'line-opacity': 0.5}
    })
    console.log(layer_name+" added");
}

function mouseMove(layers, map){
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

function mouseClick(layers, map){
    var layer;
    for(layer of layers){
        map.on('click', layer, function(e){
            let div = document.getElementById('dot_info');
            div.innerHTML = '<p> Route: ' + e.features[0].properties.ROUTEUSSP + '</p>' + '<p> Stop: ' +
                e.features[0].properties.STOP_NAME+'</p>'

        });
    }
}

function setCorrespondingButton(transports, transportColor, menu, map, refresh){
    const layers = document.getElementById(menu);
    if(refresh){
        while(layers.lastChild){
            layers.removeChild(layers.lastChild);
        }
    }
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
        layers.appendChild(link);
        link.className = '';
    }
}


function setCorrespondingTransportButton(transports, menu, map){
    const layers = document.getElementById(menu);
    while(layers.firstChild){
        layers.removeChild(layers.firstChild);
    }
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
                map.setLayoutProperty(transport_route_Name[clickedLayer],"visibility","none");
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                map.setLayoutProperty(transport_MOC_route_Name[clickedLayer], "visibility", "none");
                if(clickedLayer==="Tram"){
                    map.setLayoutProperty("Free Tram Zoom","visibility",'none');
                    map.setLayoutProperty("free_tram_zone_boundary_line-dabmgp", 'visibility','none');

                }
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(transport_route_Name[clickedLayer],"visibility","visible");
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                map.setLayoutProperty(transport_MOC_route_Name[clickedLayer],"visibility", "visible");
                if(clickedLayer==="Tram"){
                    map.setLayoutProperty("Free Tram Zoom","visibility",'visible');
                    map.setLayoutProperty("free_tram_zone_boundary_line-dabmgp", 'visibility','visible');
                }
            }
        };

        layers.appendChild(link);
        link.className = '';
    }
}

function loadLegend(name_list, color_dict){
    let legend = document.getElementById("legend");
    while(legend.lastChild){
        legend.removeChild(legend.lastChild);
    }
    let x;
    for(x of name_list){
        let color = color_dict[x];
        let item = document.createElement('div');
        let key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
        key.style.borderRadius = "50%";
        let value = document.createElement('span');
        value.innerHTML = x;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
}


function open_direction(gomap){
    let navigation_button = document.getElementById("direction");
    let mapbox_direction;
    console.log(navigation_button.className);
    navigation_button.onclick = function(){
        if(navigation_button.classList.contains("direction_on")){
            gomap.removeControl(mapbox_direction);
            navigation_button.style.top = "80px";
        }else{
            mapbox_direction = new MapboxDirections({accessToken: mapboxgl.accessToken});
            gomap.addControl(mapbox_direction,'top-left');
            navigation_button.style.top = "200px";
        }
        navigation_button.classList.toggle("direction_on");
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
//remove all elements in fixedContainer1
function clearInfoBox(){
    let pic = document.getElementById("landmark_image");
    let charts = document.getElementById("box");
    let dot_info = document.getElementById("dot_info");
    while(dot_info.lastChild){
        dot_info.removeChild(dot_info.lastChild);
    }
    pic.src = "";

    while(charts.lastChild){
        charts.removeChild(charts.lastChild);
    }
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
