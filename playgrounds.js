function openPlaygroundLayers(){
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
        var x;
        for(x of special_areas){
            addFillLayer(x,  special_areas_Layer[x], special_areas_Name[x], special_areas_Color[x],map);
            map.setLayoutProperty(x, "visibility", "none");
        }
    });

    setCorrespondingButton(special_areas, special_areas_Color,"sa_menu", map);
}