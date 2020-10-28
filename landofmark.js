function openLandOfMarks(){
    var map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/zwwang4/ckgq8lq113eym19pampeeqwjp', // stylesheet location
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
            if(x==="Cafe/restaurant"){
                addLayerWithZoom(x,poiLayers[x], poiName[x],poiColor[x],0,map, "#ffffff", 3, 1);
                map.setLayoutProperty(x, "visibility","none");
            }else{
                addLayerWithZoom(x,poiLayers[x], poiName[x],poiColor[x],0,map, "#ffffff", 4, 1);
                map.setLayoutProperty(x, "visibility","none");
            }
        }
    });

    loadLegend(place_of_interest, poiColor);

    setCorrespondingButton(place_of_interest, poiColor,"poi_menu", map, true);

    open_direction(map);
    // poi_Buttons();
}