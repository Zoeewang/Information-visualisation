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


    map.on("load", function() {
        var x;
        for (x of transports) {
            addLayerWithZoom(x, transportLyaers[x], transportName[x], transportColor[x], 13,map);
            addLineLayer(transport_route_Layers[x], transport_route_Name[x], transportColor[x], map);
            map.setLayoutProperty(x, 'visibility','none');
            map.setLayoutProperty(transport_route_Name[x],'visibility', 'none');
        }
    });

    map.on('mousemove', function(e) {
        // Change the icon to a pointer icon when you mouse over a building
        mouseMove(transports, map);
    });

    mouseClick(transports, map);

    setCorrespondingTransportButton(transports, 'menu', map);

}