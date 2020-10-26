function openLandOfMarks(){
    var map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/zwwang4/ckgq6pjoq28t719qhnwjr8gyn', // stylesheet location
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
            addLayerWithZoom(x,poiLayers[x], poiName[x],"#ffffff",0,map, poiColor[x], 2, 2);
            map.setLayoutProperty(x, "visibility","none");
        }
    });

    setCorrespondingButton(place_of_interest, poiColor,"poi_menu", map);

    // poi_Buttons();
}