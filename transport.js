function OpenTransportLayers(){
    var dot_info = document.getElementById("legend");
    dot_info.style.visibility = "visible";
    console.log(dot_info);
    document.getElementById("fixedContainer2").style.visibility = "hidden";
    clearInfoBox();
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/zwwang4/ckgq8lq113eym19pampeeqwjp', // stylesheet location
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

    map.on("load", function() {
        //Tram
        map.addLayer({
            id: "Free Tram Zoom",
            type: "fill",
            'source-layer': 'free_tram_zone-7amjpk',
            source:{
                type: 'vector',
                url:("mapbox://")+"zwwang4.39f3px85"
            },
            "paint":{"fill-color":"#bec23f",
                "fill-opacity": 0.2,
                "fill-outline-color": "#bec23f"
            }
        })
        map.setLayoutProperty("Free Tram Zoom","visibility",'none');
        addLineLayer("zwwang4.1zjq6567","free_tram_zone_boundary_line-dabmgp","#003300",map, 4);
        map.setLayoutProperty("free_tram_zone_boundary_line-dabmgp", 'visibility','none');
        addLineLayer(transport_route_Layers['Tram'],transport_route_Name['Tram'],"#cccccc", map, 2.5);
        map.setLayoutProperty(transport_route_Name['Tram'], "visibility","none");
        addLineLayer(transport_MOC_route_layer['Tram'],transport_MOC_route_Name['Tram'],transportColor['Tram'],map, 2.5);
        map.setLayoutProperty(transport_MOC_route_Name['Tram'],"visibility","none");
        map.addLayer({
            id: "Tram",
            type: "circle",
            minzoom: 13,
            'source-layer': transportName["Tram"],
            source:{
                type: 'vector',
                url:("mapbox://")+transportLyaers["Tram"]
            },
            "paint":{"circle-color":"#ffffff",
                    "circle-stroke-color": "#69ad4e",
                    "circle-radius": 4,
                    "circle-stroke-width":2.2
            }
        })
        map.setLayoutProperty('Tram', "visibility","none");

        //Train
        addLineLayer(transport_route_Layers['Train'], transport_route_Name['Train'], "#cccccc", map, 3);
        map.setLayoutProperty(transport_route_Name['Train'], "visibility","none");
        addLineLayer(transport_MOC_route_layer["Train"], transport_MOC_route_Name["Train"], transportColor['Train'], map, 3);
        map.setLayoutProperty(transport_MOC_route_Name["Train"],"visibility","none");
        map.addLayer({
            id: "Train",
            type: "circle",
            minzoom: 13,
            'source-layer': transportName["Train"],
            source:{
                type: 'vector',
                url:("mapbox://")+transportLyaers["Train"]
            },
            "paint":{"circle-color":"#ffffff",
                "circle-stroke-color": "#3a8fb7",
                "circle-radius": 6,
                "circle-stroke-width":2
            }
        })

        map.setLayoutProperty('Train', "visibility","none");

        //Sky bus
        addLineLayer(transport_route_Layers['Sky bus'], transport_route_Name['Sky bus'], "#cccccc", map, 1.5);
        map.setLayoutProperty(transport_route_Name['Sky bus'], "visibility","none");
        addLineLayer(transport_MOC_route_layer["Sky bus"], transport_MOC_route_Name["Sky bus"], transportColor['Sky bus'], map, 1,5);
        map.setLayoutProperty(transport_MOC_route_Name["Sky bus"],"visibility","none");
        addLayerWithZoom("Sky bus", transportLyaers['Sky bus'], transportName['Sky bus'], "#ffffff",
            13, map, "#ffa028", 4, 2);
        map.setLayoutProperty('Sky bus', "visibility","none");

        //Bus
        addLineLayer(transport_route_Layers['Bus'], transport_route_Name['Bus'], "#cccccc", map, 2);
        map.setLayoutProperty(transport_route_Name['Bus'], "visibility","none");
        addLineLayer(transport_MOC_route_layer["Bus"], transport_MOC_route_Name["Bus"], transportColor['Bus'], map, 2);
        map.setLayoutProperty(transport_MOC_route_Name["Bus"],"visibility","none");
        addLayerWithZoom("Bus", transportLyaers['Bus'], transportName['Bus'], "#ffffff",
            13, map, "#f76f49", 4, 2);
        map.setLayoutProperty('Bus', "visibility","none");

        //Night bus
        addLineLayer(transport_route_Layers['Night bus'], transport_route_Name['Night bus'], "#cccccc", map, 1.5);
        map.setLayoutProperty(transport_route_Name['Night bus'], "visibility","none");
        addLineLayer(transport_MOC_route_layer["Night bus"], transport_MOC_route_Name["Night bus"], transportColor['Night bus'], map, 1.5);
        map.setLayoutProperty(transport_MOC_route_Name["Night bus"],"visibility","none");
        addLayerWithZoom("Night bus", transportLyaers['Night bus'], transportName['Night bus'], "#ffffff",
            13, map, "#fe9a7e", 4, 2);
        map.setLayoutProperty('Night bus', "visibility","none");


    });

    map.on('mousemove', function(e) {
        // Change the icon to a pointer icon when you mouse over a building
        mouseMove(transports, map);
    });

    mouseClick(transports, map);


    loadLegend(transports, transportColor);
    let legend = document.getElementById("legend");
    let x = "Free Tram Zoom";
    let color = "rgba(190, 194, 63, 0.7)";
    let item = document.createElement('div');
    let key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;
    let value = document.createElement('span');
    value.innerHTML = x;
    if(x==="Bicycle Rails"){
        value.innerHTML = "Bicycle Rails & Hoops";
    }
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);

    setCorrespondingTransportButton(transports, 'menu', map);

    open_direction(map);
}