function OpenTransportLayers(){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yuligang/ckgf40z3j29rh19qui5wnp8ix', // stylesheet location
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

    // let transports = ["bus","tram","train","sky bus","night bus"];
    // let transportLyaers = {"bus":"zwwang4.d6fbwpyn", "tram":"zwwang4.df9decyn","train":"zwwang4.5zoco9pq","sky bus":"zwwang4.bkxr7mi6","night bus":"zwwang4.9karz3fu"};
    // let transportName = {"bus": "bus_stop-bisgow", "tram":"tram_stop-1wfy70","train":"train_station-1i70n4","sky bus":"sky_bus_stop-7qf27q","night bus":"night_bus_stop-asvh8x"};
    // let transportColor = {"bus": "#de8282", "tram":"#668cff","train":"#ffcc00","sky bus":"#66ff33","night bus":"#ff6600"};
    //
    // let transport_route_Layers = {"bus":"zwwang4.2kz6w0iq","tram":"zwwang4.44idhdrf","train":"zwwang4.bis7pf0r","sky bus":"zwwang4.3urevqi7", "night bus":"zwwang4.4bjkmit2"}
    // let transport_route_Name = {"bus":"bus_route-ae5rku","tram":"tram_route-a6u7q2", "train":"train_route-1dlqlx", "sky bus":"skybus_route-0tepci", "night bus":"night_bus_route-7e9883"}

    map.on("load", function() {
        var x;
        for (x of transports) {
            addLayerWithZoom(x, transportLyaers[x], transportName[x], transportColor[x], 13);
            addLineLayer(transport_route_Layers[x], transport_route_Name[x], transportColor[x]);
        }
    });

    map.on('mousemove', function(e) {
        // Change the icon to a pointer icon when you mouse over a building
        mouseMove(transports);
    });

    mouseClick(transports);

    setCorrespondingTransportButton(transports, 'menu');

}