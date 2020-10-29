function openLandOfMarks(){
    var dot_info = document.getElementById("legend");
    dot_info.style.visibility = "visible";
    console.log(dot_info);
    document.getElementById("fixedContainer2").style.visibility = "hidden";
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
            if(x==="Cafes & restaurants"){
                addLayerWithZoom(x,poiLayers[x], poiName[x],poiColor[x],0,map, "#ffffff", 3, 1);
                map.setLayoutProperty(x, "visibility","none");
            }else{
                addLayerWithZoom(x,poiLayers[x], poiName[x],poiColor[x],0,map, "#ffffff", 4, 1);
                map.setLayoutProperty(x, "visibility","none");
            }
        }
    });

    // let new_place_of_restaurant = ["Cafes & restaurants", "Convenient support services","Land Marks & places of interest", "Public memorials & sculptures"];
    clearInfoBox();

    loadLegend(place_of_interest, poiColor);

    setCorrespondingButton(place_of_interest, poiColor,"poi_menu", map, true);

    open_direction(map);

    //add click on function for different layers
    map.on('click', "Land Marks & places of interest", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Name: ' + e.features[0].properties["Feature.Na"] + '</p>' + '<p> Theme: ' +
            e.features[0].properties['Sub.Theme']+'</p>'

    });

    map.on('click', "Cafes & restaurants", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Cafe/Restaurant Name: ' + e.features[0].properties["Trading na"] + '</p>' +
            '<p> Address: ' + e.features[0].properties['Street add']+'</p>' +
            '<p> Seat type: ' + e.features[0].properties['Seating ty']+'</p>' +
            '<p> Number of seats: ' + e.features[0].properties['Number of']+'</p>'

    });

    map.on('click', "Public memorials & sculptures", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Title: ' + e.features[0].properties["Title"] + '</p>' +
            '<p> Subclass: ' + e.features[0].properties['subclass']+'</p>'

    });

    map.on('click',  "Convenient support services", function(e){
        let div = document.getElementById('dot_info');
        div.innerHTML = '<p> Name: ' + e.features[0].properties["Name"] + '</p>' +
            '<p> Address 1: ' + e.features[0].properties['Address 1']+'</p>' +
            '<p> Address 2: ' + e.features[0].properties['Address 2']+'</p>' +
            '<p> Phone number: ' + e.features[0].properties['Phone']+'</p>'
    });
}