function OpenTransportLayers(){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/zwwang4/ckgq6pjoq28t719qhnwjr8gyn', // stylesheet location
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
                    "circle-stroke-color": "#72ad5b",
                    "circle-radius": 3,
                    "circle-stroke-width":0.6
            }
        })
        map.setLayoutProperty('Tram', "visibility","none");
        addLineLayer(transport_route_Layers['Tram'],transport_route_Name['Tram'],"#72ad5b", map, 0.7);
        map.setLayoutProperty(transport_route_Name['Tram'], "visibility","none");

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
                "circle-radius": 3,
                "circle-stroke-width":0.6
            }
        })

        map.setLayoutProperty('Train', "visibility","none");
        addLineLayer(transport_route_Layers['Train'], transport_route_Name['Train'], "#3a8fb7", map, 0.9);
        map.setLayoutProperty(transport_route_Name['Train'], "visibility","none");

        addLayerWithZoom("Sky bus", transportLyaers['Sky bus'], transportName['Sky bus'], "#ffffff",
            13, map, "#ffa028", 2, 0.4);
        map.setLayoutProperty('Sky bus', "visibility","none");
        addLineLayer(transport_route_Layers['Sky bus'], transport_route_Name['Sky bus'], "#ffa028", map, 0.3);
        map.setLayoutProperty(transport_route_Name['Sky bus'], "visibility","none");

        addLayerWithZoom("Bus", transportLyaers['Bus'], transportName['Bus'], "#ffffff",
            13, map, "#f76f49", 2, 0.4);
        map.setLayoutProperty('Bus', "visibility","none");
        addLineLayer(transport_route_Layers['Bus'], transport_route_Name['Bus'], "#f76f49", map, 0.4);
        map.setLayoutProperty(transport_route_Name['Bus'], "visibility","none");

        addLayerWithZoom("Night bus", transportLyaers['Night bus'], transportName['Night bus'], "#ffffff",
            13, map, "#fe9a7e", 2, 0.4);
        map.setLayoutProperty('Night bus', "visibility","none");
        addLineLayer(transport_route_Layers['Night bus'], transport_route_Name['Night bus'], "#fe9a7e", map, 0.3);
        map.setLayoutProperty(transport_route_Name['Night bus'], "visibility","none");

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
                "fill-outline-color": "#bec23f",
            }
        })

    });

    // map.on('mousemove', function(e) {
    //     // Change the icon to a pointer icon when you mouse over a building
    //     mouseMove(transports, map);
    // });
    //
    // mouseClick(transports, map);
    //
    setCorrespondingTransportButton(transports, 'menu', map);

}