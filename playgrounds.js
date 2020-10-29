function openPlaygroundLayers(){
    document.getElementById("fixedContainer2").style.visibility = "hidden";
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

    clearInfoBox();

    loadLegend(special_areas, special_areas_Color);

    setCorrespondingButton(special_areas, special_areas_Color,"sa_menu", map, true);

    open_direction(map);

    map.on('click', "Playgrounds", function(e){
        let div = document.getElementById('dot_info');

        div.innerHTML = '<p> Name: ' + e.features[0].properties["name"] + '</p>';
        if(e.features[0].properties['location_d']!==""){
            div.innerHTML += '<p> Location: ' + e.features[0].properties['location_d']+'</p>';
        }
        if(e.features[0].properties['features']!==""){
            div.innerHTML +=  '<p> Features: ' + e.features[0].properties['features'] + '</p>';
        }

    });

    map.on('click', "Outdoor non-smoke zones", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Location: ' + e.features[0].properties["name"] + '</p>'
    });

    let mouseMovingList = ["Playgrounds", "Outdoor non-smoke zones"];
    map.on('mousemove', function(e) {
        // Change the icon to a pointer icon when you mouse over a building
        mouseMove(mouseMovingList, map);
    });

}