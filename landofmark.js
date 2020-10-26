function openLandOfMarks(){
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
        for(x of place_of_interest){
            addLayer(x,poiLayers[x], poiName[x], poiColor[x], map);
            map.setLayoutProperty(x, "visibility","none");
        }
    });

    setCorrespondingButton(place_of_interest, poiColor,"poi_menu", map);

    // poi_Buttons();
}