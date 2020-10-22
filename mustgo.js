function startMap() {
    // this.visible=true
    mapboxgl.accessToken = 'pk.eyJ1Ijoiend3YW5nNCIsImEiOiJja2Z5eXF5ZmIwN2d3MnlvMWthNXV0eDY1In0.N-0Dr177HFqwX9_VxWsy_g';
    var gomap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yuligang/ckgf40z3j29rh19qui5wnp8ix', // stylesheet location
        center: {lat: -37.814, lng: 144.969}, // starting position [lng, lat]
        zoom: 13 // starting zoom
    });

    var shrine_loc = {lat: -37.829906, lng: 144.973442}
    var arts_loc = {lat:-37.820060, lng:144.968138}
    var etihad_loc = {lat: -37.816327, lng:144.947463}
    var eureka_loc = {lat: -37.821067, lng:144.964725}
    var fed_loc = {lat: -37.817891, lng:144.969045}
    var flind_loc = {lat: -37.818402, lng:144.967233}

    var immi_loc = {lat: -37.819092, lng:144.960433}
    var dock_loc = {lat: -37.819752, lng:144.940899}
    var convention_loc = {lat: -37.825985, lng:144.953118}
    var museum_loc = {lat: -37.803120, lng:144.971762}
    var star_loc = {lat: -37.811631, lng:144.937426}
    var royal_loc = {lat: -37.804350, lng:144.971693}
    var southern_loc = {lat: -37.818228, lng:144.952539}
    var state_loc = {lat: -37.809537, lng:144.965190}
    var parli_loc = {lat: -37.810852, lng:144.973757}


// create the popup
    var shrine_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+
            '<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>'+
            '<img src="./image/Shrine_of_Rememberance.png" style="width:200px;height:100px;">'
    +'<canvas id="myChart" width="20" height="20"></canvas>')
    ;

    var arts_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var etihad_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var eureka_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;

    var fed_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;

    var flind_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var immi_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var dock_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var convention_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var museum_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var star_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;

    var royal_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var southern_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var state_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;
    var parli_popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h5>Shrine of Remembrance</h5>'+'<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>')
    ;



// create DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.id = 'shrine';

    var arts = document.createElement('div');
    arts.className = 'marker';
    arts.id = 'arts';

    var etihad = document.createElement('div');
    etihad.className = 'marker';
    etihad.id = 'etihad';

    var eureka = document.createElement('div');
    eureka.className = 'marker';
    eureka.id = 'eureka';

    var fed = document.createElement('div');
    fed.className = 'marker';
    fed.id = 'fed';

    var flind = document.createElement('div');
    flind.className = 'marker';
    flind.id = 'flind';

    var immi = document.createElement('div');
    immi.className = 'marker';
    immi.id = 'immi';

    var dock = document.createElement('div');
    dock.className = 'marker';
    dock.id = 'dock';

    var convention = document.createElement('div');
    convention.className = 'marker';
    convention.id = 'convention';

    var museum = document.createElement('div');
    museum.className = 'marker';
    museum.id = 'museum';

    var star = document.createElement('div');
    star.className = 'marker';
    star.id = 'star';

    var royal = document.createElement('div');
    royal.className = 'marker';
    royal.id = 'royal';

    var southern = document.createElement('div');
    southern.className = 'marker';
    southern.id = 'southern';

    var state = document.createElement('div');
    state.className = 'marker';
    state.id = 'state';

    var parli = document.createElement('div');
    parli.className = 'marker';
    parli.id = 'parli';



// create the marker
    new mapboxgl.Marker(el)
        .setLngLat(shrine_loc)
        .setPopup(shrine_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(arts)
        .setLngLat(arts_loc)
        .setPopup(arts_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(etihad)
        .setLngLat(etihad_loc)
        .setPopup(etihad_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(eureka)
        .setLngLat(eureka_loc)
        .setPopup(eureka_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(fed)
        .setLngLat(fed_loc)
        .setPopup(fed_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(flind)
        .setLngLat(flind_loc)
        .setPopup(flind_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(immi)
        .setLngLat(immi_loc)
        .setPopup(immi_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(dock)
        .setLngLat(dock_loc)
        .setPopup(dock_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(museum)
        .setLngLat(museum_loc)
        .setPopup(museum_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(convention)
        .setLngLat(convention_loc)
        .setPopup(convention_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(star)
        .setLngLat(star_loc)
        .setPopup(star_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(royal)
        .setLngLat(royal_loc)
        .setPopup(royal_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(southern)
        .setLngLat(southern_loc)
        .setPopup(southern_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(state)
        .setLngLat(state_loc)
        .setPopup(state_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(parli)
        .setLngLat(parli_loc)
        .setPopup(parli_popup) // sets a popup on this marker
        .addTo(gomap);
    //
    // new mapboxgl.Marker(royal)
    //     .setLngLat(royal_lo)
    //     .setPopup(popup) // sets a popup on this marker
    //     .addTo(map);
    // el.addEventListener('click', function(e){
    //     Prevent the `map.on('click')` from being triggered
    //     e.stopPropagation();
    //     console.log('hhhhhh');
    //     var para = document.createElement("P");                 // Create a <p> element
    //     para.innerHTML = "This is a paragraph.";                // Insert text
    //     document.getElementById("information").appendChild(para);
    //     var para = document.getElementById("information");
    //     var displaySetting = para.style.display;
    //     if (displaySetting == 'block') {
    //         console.log("block")
    //         para.style.display = 'none';
    //     }
    //     else {
    //         para.style.display = 'block';
    //     }
    // });
    el.addEventListener('click', function(e){
        var ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734,784,433]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    });

    state.addEventListener('click', function(e){
        var ctx = document.getElementById('myChart');
        console.log("keyi")
        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["haha", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734,784,433]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    });
}
