function openPlaygroundLayers(){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/zwwang4/ckgq6pjoq28t719qhnwjr8gyn', // stylesheet location
        center: {lat: -37.814, lng: 144.969}, // starting position [lng, lat]
        zoom: 13 // starting zoom
    });

    map.on("load", function() {
        var x;
        for(x of special_areas){
            addFillLayer(x,  special_areas_Layer[x], special_areas_Name[x], special_areas_Color[x],map);
            map.setLayoutProperty(x, "visibility", "none");
        }
    });

    // let direct = document.getElementById("direction");
    // direct.addEventListener("click", addNavigationControl(map));

    loadLegend(special_areas, special_areas_Color);

    setCorrespondingButton(special_areas, special_areas_Color,"sa_menu", map, true);
}