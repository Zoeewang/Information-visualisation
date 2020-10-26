function OpenPublicProperties(){
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
        addLayerWithZoom("Barbeque", cfLayer['Barbeque'],cfName['Barbeque'], "#ffffff", 0, map, cfColor["Barbeque"], 2, 1);
        addLayerWithZoom("Bicycle Rails", cfLayer["Bicycle Rails"], cfName["Bicycle Rails"], "#ffffff", 0 ,map,cfColor["Bicycle Rails"], 5, 1);
        addLayerWithZoom("Information Pillar", cfLayer["Information Pillar"], cfName["Information Pillar"], "#ffffff", 0, map, cfColor["Information Pillar"], 2, 1);
        addLayerWithZoom("Picnic setting", cfLayer["Picnic setting"], cfName["Picnic setting"], "#ffffff", 0, map, cfColor["Picnic setting"], 5 ,1);
        addLayerWithZoom("Drinking fountains", cfLayer["Drinking fountains"], cfName["Drinking fountains"], "#ffffff", 0, map, cfColor["Drinking fountains"], 5 ,1);
        addLayerWithZoom("Hoop", cfLayer["Hoop"], cfName["Hoop"], "#ffffff", 0, map, cfColor["Hoop"], 6, 1);
        addLayerWithZoom("Public toilet", cfLayer["Public toilet"], cfName["Public toilet"], "#ffffff", 0, map, cfColor["Public toilet"], 5, 1);
        addLayerWithZoom("Seat", cfLayer["Seat"], cfName["Seat"], "#ffffff", 0, map, cfColor["Seat"], 2,1);
        addLayerWithZoom("Little bin", cfLayer["Little bin"], cfName["Little bin"], "#ffffff", 0, map, cfColor["Little bin"], 2, 1);
        for(x of convenience_facilities){
            map.setLayoutProperty(x, "visibility","none");
        }
    });

    setCorrespondingButton(convenience_facilities, cfColor,"cf_menu", map,);
}