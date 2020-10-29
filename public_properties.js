function OpenPublicProperties(){
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

    clearInfoBox();

    map.on("load", function() {
        addLayerWithZoom("Barbecue", cfLayer['Barbecue'],cfName['Barbecue'], cfColor["Barbecue"], 0, map, "#ffffff", 5, 1);
        addLayerWithZoom("Bicycle Rails", cfLayer["Bicycle Rails"], cfName["Bicycle Rails"], cfColor["Bicycle Rails"], 0 ,map,"#ffffff", 3, 1);
        addLayerWithZoom("Information Pillars", cfLayer["Information Pillars"], cfName["Information Pillars"], cfColor["Information Pillars"], 0, map, "#ffffff", 5, 1);
        addLayerWithZoom("Picnic setting", cfLayer["Picnic setting"], cfName["Picnic setting"], cfColor["Picnic setting"], 0, map, "#ffffff", 5 ,1);
        addLayerWithZoom("Drinking fountains", cfLayer["Drinking fountains"], cfName["Drinking fountains"],  cfColor["Drinking fountains"], 0, map, "#ffffff", 5 ,1);
        addLayerWithZoom("Hoop", cfLayer["Hoop"], cfName["Hoop"], cfColor["Hoop"], 0, map, "#ffffff", 3, 1);
        addLayerWithZoom("Public toilets", cfLayer["Public toilets"], cfName["Public toilets"],  cfColor["Public toilets"], 0, map, "#ffffff", 5, 1);
        addLayerWithZoom("Seats", cfLayer["Seats"], cfName["Seats"], cfColor["Seats"], 0, map, "#ffffff", 3,1);
        addLayerWithZoom("Little bins", cfLayer["Little bins"], cfName["Little bins"], cfColor["Little bins"], 0, map, "#ffffff", 3, 1);
        for(x of convenience_facilities){
            map.setLayoutProperty(x, "visibility","none");
        }
    });

    const layers = document.getElementById("cf_menu");
    while(layers.lastChild){
        layers.removeChild(layers.lastChild);
    }

    let cutted_public_properties = ["Drinking fountains", "Information Pillars","Little bins", "Public toilets","Seats"];

    //Add barbeque and picnic area button, and show or hide the layer of barbecue and picnic
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = "Barbecues & Picnic settings";
    // console.log(link.textContent);
    link.onclick = function (e) {
        // var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty("Barbecue", 'visibility');

        // toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
            map.setLayoutProperty("Barbecue", 'visibility', 'none');
            map.setLayoutProperty("Picnic setting","visibility",'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty("Barbecue", 'visibility', 'visible');
            map.setLayoutProperty("Picnic setting","visibility",'visible');
        }
    };

    layers.appendChild(link);
    link.className = '';

    //Add bicycle rails and hoop button , click to show or hide those two layers
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = "Bicycle rails & Hoops";
    // console.log(link.textContent);
    link.onclick = function (e) {
        // var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty("Bicycle Rails", 'visibility');

// toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
            map.setLayoutProperty("Bicycle Rails", 'visibility', 'none');
            map.setLayoutProperty("Hoop","visibility",'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty("Bicycle Rails", 'visibility', 'visible');
            map.setLayoutProperty("Hoop","visibility",'visible');
        }
    };

    layers.appendChild(link);
    link.className = '';


    setCorrespondingButton(cutted_public_properties, cfColor, "cf_menu", map, false);
    let new_legend_list =  ["Barbecue","Picnic setting","Bicycle Rails","Drinking fountains", "Information Pillars","Little bins", "Public toilets","Seats"]
    loadLegend(new_legend_list, cfColor);
    open_direction(map);

    map.on('click', "Drinking fountains", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Type: ' + e.features[0].properties["type"] + '</p>' +
            '<p> Other description: ' + e.features[0].properties['other_description']+'</p>'

    });

    map.on('click', "Picnic setting", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Location: ' + e.features[0].properties["LOCATION_DESC"] + '</p>' +
            '<p> Description: ' + e.features[0].properties['DESCRIPTION']+'</p>'
    });

    map.on('click', "Public toilets", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Location: ' + e.features[0].properties["location"] + '</p>' +
            '<p> Female: ' + e.features[0].properties['female']+'</p>' +
            '<p> Male: ' + e.features[0].properties['male']+'</p>' +
            '<p> Wheelchair: ' + e.features[0].properties['wheelchair']+'</p>' +
            '<p> Baby facil: ' + e.features[0].properties['baby_facil']+'</p>'
    });

    map.on('click', "Barbecue", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Location: ' + e.features[0].properties["LOCATION_D"] + '</p>'
    });

    map.on('click', "Bicycle Rails", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Location: ' + e.features[0].properties["LOCATION_D"] + '</p>'
    });

    map.on('click', "Hoop", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Location: ' + e.features[0].properties["LOCATION_DESC"] + '</p>'
    });

    let mouseMovingList = ["Drinking fountains","Picnic setting", "Public toilets", "Barbecue", "Bicycle Rails", "Hoop"];
    map.on('mousemove', function(e) {
        // Change the icon to a pointer icon when you mouse over a building
        mouseMove(mouseMovingList, map);
    });
}