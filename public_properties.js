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

    map.on("load", function() {
        addLayerWithZoom("Barbeque", cfLayer['Barbeque'],cfName['Barbeque'], cfColor["Barbeque"], 0, map, "#ffffff", 3, 1);
        addLayerWithZoom("Bicycle Rails", cfLayer["Bicycle Rails"], cfName["Bicycle Rails"], cfColor["Bicycle Rails"], 0 ,map,"#ffffff", 3, 1);
        addLayerWithZoom("Information Pillar", cfLayer["Information Pillar"], cfName["Information Pillar"], cfColor["Information Pillar"], 0, map, "#ffffff", 5, 1);
        addLayerWithZoom("Picnic setting", cfLayer["Picnic setting"], cfName["Picnic setting"], "#ffffff", 0, map, cfColor["Picnic setting"], 4 ,2);
        addLayerWithZoom("Drinking fountains", cfLayer["Drinking fountains"], cfName["Drinking fountains"], "#ffffff", 0, map, cfColor["Drinking fountains"], 5 ,1);
        addLayerWithZoom("Hoop", cfLayer["Hoop"], cfName["Hoop"], "#ffffff", 0, map, cfColor["Hoop"], 6, 1);
        addLayerWithZoom("Public toilet", cfLayer["Public toilet"], cfName["Public toilet"], "#ffffff", 0, map, cfColor["Public toilet"], 5, 1);
        addLayerWithZoom("Seat", cfLayer["Seat"], cfName["Seat"], "#ffffff", 0, map, cfColor["Seat"], 2,1);
        addLayerWithZoom("Little bin", cfLayer["Little bin"], cfName["Little bin"], "#ffffff", 0, map, cfColor["Little bin"], 2, 1);
        for(x of convenience_facilities){
            map.setLayoutProperty(x, "visibility","none");
        }
    });

    loadLegend(convenience_facilities, cfColor);

    const layers = document.getElementById("cf_menu");
    while(layers.lastChild){
        layers.removeChild(layers.lastChild);
    }

    let cutted_public_properties = ["Drinking fountains", "Information Pillar","Little bin", "Public toilet","Seat"];

    //Add barbeque and picnic area button, and show or hide the layer of barbeque and picnic
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = "Barbeque & Picnic Area";
    // console.log(link.textContent);
    link.onclick = function (e) {
        // var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty("Barbeque", 'visibility');

// toggle layer visibility by changing the layout object's visibility property
        if (visibility === 'visible') {
            map.setLayoutProperty("Barbeque", 'visibility', 'none');
            map.setLayoutProperty("Picnic setting","visibility",'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty("Barbeque", 'visibility', 'visible');
            map.setLayoutProperty("Picnic setting","visibility",'visible');
        }
    };

    layers.appendChild(link);
    link.className = '';

    //Add bicycle rails and hoop button , click to show or hide those two layers
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = "Bicycle rails and Hoop";
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


}