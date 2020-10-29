function startMap() {
    // this.visible=true
    document.getElementById("fixedContainer2").style.visibility = "hidden";
    // document.getElementById("fixedContainer").style.visibility = "hidden";

    mapboxgl.accessToken = 'pk.eyJ1Ijoiend3YW5nNCIsImEiOiJja2dwdW5rbmkwa25wMnJxaXZjZGl3aWJoIn0.cz7Disiu_jwNDozdcG98NQ';

    // mapboxgl.accessToken = 'pk.eyJ1IjoieXVsaWdhbmciLCJhIjoiY2oycWd0N2piMDJkczJ3bndsOWs5ZWcxbyJ9.WzG80MkhSYNC2v4Mwrg-IA';

    var gomap = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/zwwang4/ckgq8lq113eym19pampeeqwjp", // stylesheet location
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
    var sea_loc = {lat: -37.820466, lng:144.958201}
    var ngv_loc = {lat: -37.822387, lng:144.968874}
    var st_loc  = {lat: -37.816865, lng:144.967718}
    var old_loc = {lat: -37.813006, lng:144.974472}
    var queen_loc= {lat: -37.80750, lng:144.957158}



// create the popup
//     var shrine_popup = new mapboxgl.Popup({ offset: 25 })
//         .setHTML('<h5>Shrine of Remembrance</h5>'+
//             '<p>Visit the Shrine of Remembrance, Melbourne\'s most iconic landmark, where Victorians have been coming since 1934 to honour the service and sacrifice of Australian men and women in war and peacekeeping. </p>'+
//             '<img src="./image/Shrine_of_Rememberance.png" style="width:200px;height:100px;">'
//     +'<canvas id="myChart" width="20" height="20"></canvas>')
//     ;
    var shrine_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Shrine of Remembrance</b></h6>'+ '<p style="color:gray">War Memorial</p>' +
            '<p>An iconic landmark honouring the service of Australian men and women in war and peacekeeping. <br><br><b> Opening Hours</b> <br> All days : 10 am to 5 pm </p>'
            );
    ;
    var arts_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Arts Centre Melbourne</b></h6>'+ '<p style="color:gray">Performing Arts Centre</p>' +
            '<p>Originally known as the Victorian Arts Centre and briefly called the Arts Centre, is a performing arts centre consisting of a complex of theatres and concert halls in the Melbourne Arts Precinct.<br><br> <b>Opening Hours</b> <br>Monday to Friday : 7:30 am to 8 pm <br>Saturday & Sunday: 8:30 am to 8:00 pm </p>'+'<canvas id="myChart" width="20" height="20"></canvas>');

    var etihad_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Marvel Stadium</b></h6>'+ '<p style="color:gray">Sports Stadium</p>' +
            '<p>Docklands Stadium, also known by naming rights sponsorship as Marvel Stadium, is a multi-purpose sports and entertainment stadium in the Docklands area of Melbourne. <br><br><b> Opening Hours</b> <br>All days : 8.30 am to 5 pm</p>'+'<canvas id="myChart" width="20" height="20"></canvas>');

    var eureka_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Eureka Skydeck</b></h6>'+ '<p style="color:gray">Skyscraper</p>' +
            '<p>Eureka Skydeck 88 is Melbourne\'s must see attraction. Only Skydeck 88 can take you to The Edge, a switchable glass cube which slides out from the building, with you inside. <br><br><b> Opening Hours</b> <br>All days : 10 am to 10 pm</p>'+
            '<canvas id="myChart" width="20" height="20"></canvas>');


    var fed_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Fedaration Square</b></h6>'+ '<p style="color:gray">Plaza</p>' +
            '<p>Federation Square is a venue for arts, culture and public events on the edge of the Melbourne central business district. <br><br><b> Opening Hours</b> <br>All days </p>'+'<canvas id="myChart" width="20" height="20"></canvas>');


    var flind_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Flinders Street Station</b></h6>'+ '<p style="color:gray">Train Station</p>' +
            '<p>Flinders Street Station is Australia’s oldest train station, and with its prominent green copper dome, distinctive yellow facade, arched entrance, tower, and clocks.<br><br><b> Opening Hours</b> <br>All days </p>'+'<canvas id="myChart" width="20" height="20"></canvas>');


    var immi_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Immigration Museum</b></h6>'+ '<p style="color:gray">Museum</p>' +
            '<p>Explore Melbourne\'s history through stories of people from across the world who have migrated to Victoria at the Immigration Museum.<br><br><b> Opening Hours</b> <br>All days : 10 am to 5 pm </p>'+'<canvas id="myChart" width="20" height="20"></canvas>');


    var dock_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Library at The Dock</b></h6>'+ '<p style="color:gray">Library</p>' +
            '<p>Library at The Dock is a modern public library and community hub located on the waterfront at Docklands. The library features dedicated research facilities and exhibition spaces.<br><br><b> Opening Hours</b> <br>Monday to Friday : 8 am to 7 pm <br> Saturday: 10 am to 5 pm <br> Sunday 12 pm to 5 pm </p>'
            +'<canvas id="myChart" width="20" height="20"></canvas>');

    var convention_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Melbourne Convention and Exhibition Centre</b></h6>'+ '<p style="color:gray">Function/Exhibition Centre</p>' +
            '<p>The Melbourne Convention and Exhibition Centre does exactly as its name suggests: plays host to some of Melbourne\'s biggest events. Festivals, exhibitions, conventions, gigs of all sizes find themselves an audience in the centre\'s river-view rooms and auditoriums.<br><br><b> Opening Hours</b> <br> Dependent on the events</p>'+
            '<canvas id="myChart" width="20" height="20"></canvas>');

    var museum_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Melbourne Museum</b></h6>'+ '<p style="color:gray">Museum</p>' +
            '<p>Melbourne Museum is a natural and cultural history museum located in the Carlton Gardens. Located adjacent to the Royal Exhibition Building, it is the largest museum in the Southern Hemisphere<br><br><b> Opening Hours</b> <br> All days : 10 am to 5 pm</p>'+'<canvas id="myChart" width="20" height="20"></canvas>');

    var star_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Melbourne Star Observation Wheel</b></h6>'+ '<p style="color:gray">Ferris Wheel</p>' +
            '<p>The Melbourne Star is the Southern Hemisphere\'s only observation wheel, offering a sky-high experience like no other. Standing at a staggering 120 metres tall, this is Melbourne like you’ve never seen it before.<br><br><b> Opening Hours</b> <br> All days : 11 am to 9:30 pm</p>'+'<canvas id="myChart" width="20" height="20"></canvas>');

    var royal_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Royal Exhibition Building</b></h6>'+ '<p style="color:gray">World Heritage Building</p>' +
            '<p>The building is one of the world\'s oldest remaining exhibition pavilions and was originally built for the Great Exhibition of 1880. It was the first building in Australia to achieve a World Heritage listing in 2004.<br><br><b> Opening Hours</b> <br> All days : Guided tours at 2 pm</p>'+'<canvas id="myChart" width="20" height="20"></canvas>');

    var southern_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Southern Cross Station</b></h6>'+ '<p style="color:gray">Train Station</p>' +
            '<p>Southern Cross railway station is a major railway station in Docklands. It is on Spencer Street, between Collins and La Trobe Streets, at the western edge of the central business district.<br><br><b> Opening Hours</b> <br> All days </p>'
            +'<canvas id="myChart" width="20" height="20"></canvas>');

    var parli_popup  = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Parliament House</b></h6>'+ '<p style="color:gray">Legislature</p>' +
            '<p>Parliament House is one of Australia\'s oldest and most architecturally distinguished public buildings.See where Australia\'s first Federal Parliament conducted proceedings for 26 years.<br><br><b> Opening Hours</b> <br> Monday to Friday : 8:30 am to 5:30 pm </p>'+
            '<canvas id="myChart" width="20" height="20"></canvas>');

    var state_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>State Library Victoria</b></h6>'+ '<p style="color:gray">Library</p>' +
            '<p>The State Library Victoria is the main library of the Australian state of Victoria. Located in Melbourne, it was established in 1854 as the Melbourne Public Library, making it Australia\'s oldest public library and one of the first free libraries in the world.<br><br><b> Opening Hours</b> <br> Monday to Thursday : 10 am to 9 pm <br> Friday to Sunday : 10 am to 6 pm</p>'+
            '<canvas id="myChart" width="20" height="20"></canvas>');

    var sea_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Sea Life Melbourne</b></h6>'+ '<p style="color:gray">Aquarium</p>' +
            '<p>Dive into a magical underwater world.SEA LIFE Melbourne Aquarium takes you on an interactive ocean adventure filled with amazing discovery and magical marine stories.<br><br><b> Opening Hours</b> <br> Monday to Friday : 10 am to 5:30 pm <br> Saturday,Sunday : 10 am to 6 pm</p>'
            +'<canvas id="myChart" width="20" height="20"></canvas>');

    var ngv_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>National Gallery of Victoria </b></h6>'+ '<p style="color:gray">Art Gallery</p>' +
            '<p>NGV International houses a whole world of international art, displaying the National Gallery of Victoria\'s collections of European, Asian, Oceanic and American art. <br><br><b> Opening Hours</b> <br> All days : 10 am to 5 pm</p>'+
            '<canvas id="myChart" width="20" height="20"></canvas>');

    var st_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>St Paul\'s Cathedral </b></h6>'+ '<p style="color:gray">Catholic Church</p>' +
            '<p>St Paul\'s Cathedral is an Anglican cathedral in Melbourne, Australia. It is the cathedral church of the Diocese of Melbourne and the seat of the Archbishop of Melbourne, who is also the metropolitan archbishop of the Province of Victoria and, since 28 June 2014, the present seat of the Primate of Australia.<br><br><b> Opening Hours</b> <br> Monday to Friday : 10 am to 4 pm<br> Saturday & Sunday : 10 am to 4 pm</p>'
            +'<canvas id="myChart" width="20" height="20"></canvas>');

    var old_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>The Old Treasury Building</b></h6>'+ '<p style="color:gray">Museum</p>' +
            '<p>The Old Treasury Building provides an ideal orientation to Melbourne for visitors wishing to understand and explore the city\'s history, architecture, art and contemporary life.<br><br><b> Opening Hours</b> <br> Monday to Friday : 7 am to 4 pm<br> Saturday & Sunday : 9 am to 5:30 pm</p>'
            +'<canvas id="myChart" width="20" height="20"></canvas>');

    var queen_popup = new mapboxgl.Popup({ offset: 15 })
        .setHTML('<h6><b>Queen Victoria Market</b></h6>'+ '<p style="color:gray">Open Air Market</p>' +
            '<p>Home to over 600 small businesses, it is a great place to discover fresh and specialty produce, hand-made and unique products, great coffee and food, souvenirs and clothing.<br><br><b> Opening Hours</b> <br> Tuesday, Thursday, Friday: 6 am to 3 pm<br> Saturday : 6 am to 4 pm <br> Sunday : 9 am to 4 pm</p>'+
            '<canvas id="myChart" width="20" height="20"></canvas>');


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

    var sea = document.createElement('div');
    sea.className = 'marker';
    sea.id = 'sea';

    var st = document.createElement('div');
    st.className = 'marker';
    st.id = 'st';

    var ngv = document.createElement('div');
    ngv.className = 'marker';
    ngv.id = 'ngv';

    var old = document.createElement('div');
    old.className = 'marker';
    old.id = 'old';

    var queenvic=document.createElement('div');
    queenvic.className = 'marker';
    queenvic.id = 'queenvic';



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

    new mapboxgl.Marker(sea)
        .setLngLat(sea_loc)
        .setPopup(sea_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(st)
        .setLngLat(st_loc)
        .setPopup(st_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(old)
        .setLngLat(old_loc)
        .setPopup(old_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(ngv)
        .setLngLat(ngv_loc)
        .setPopup(ngv_popup) // sets a popup on this marker
        .addTo(gomap);

    new mapboxgl.Marker(queenvic)
        .setLngLat(queen_loc)
        .setPopup(queen_popup) // sets a popup on this marker
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


    // el.addEventListener('click', function(e){
    //     var ctx = document.getElementById('myChart').getContext("2d");
    //     if (window.haChart != null) window.haChart.destroy();
    //     window.haChart = new Chart(ctx, {
    //         type: 'horizontalBar',
    //         data: {
    //             labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
    //             datasets: [
    //                 {
    //                     label: "",
    //                     backgroundColor: ["#54478C","#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
    //                     data: [898,857,865,947,947,1036,979]
    //                 }
    //             ]
    //         },
    //         options: {
    //             legend: { display: false },
    //             title: {
    //                 display: true,
    //                 text: 'Average number of people visiting everyday'
    //             }
    //         }
    //     });
    //     document.getElementById("landmark_image").src = "./image/Shrine_of_Rememberance.png";
    //     // document.getElementById("p1").innerHTML = "New text!";
    //
    // });
    el.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        // var ctx = document.getElementById('myChart').getContext("2d");
        // if (window.haChart != null) window.haChart.destroy();
        window.haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label: "",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [898,857,865,947,947,1036,979]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Shrine_of_Rememberance.png";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 0;
        // document.getElementById("p1").innerHTML = "New text!";

    });



    arts.addEventListener('click', function(e){
        // if (window.haChart != null) window.haChart.destroy();
        // var ctx = document.getElementById('myChart').getContext("2d");
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");

        window.haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [510,395,367,384,372, 426,491]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/ArtsCentre.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 1;
    });

    etihad.addEventListener('click', function(e){
        // var ctx = document.getElementById('myChart').getContext("2d");
        // if (window.haChart != null) window.haChart.destroy();
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        window.haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [256,700,772,775,788,824,368]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Marvel Studium.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 2;
    });

    eureka.addEventListener('click', function(e){
        // var ctx = document.getElementById('myChart').getContext("2d");
        // if (window.haChart != null) window.haChart.destroy();
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        window.haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [1308,1314,1367,1386,1418,1643,1542]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Eurekatower.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 3;
    });

    fed.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        window.haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [1007,966,956,1033,1037,1210,1170]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });

        document.getElementById("landmark_image").src = "./image/Federation Square.jpg ";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 4;
    });

    flind.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [1007,966,956,1033,1037,1210,1170]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/flinders street station.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 5;

    });
    immi.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [310,387,401,409,412,448,350]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Immigration Museum.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 6;

    });
    dock.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [60,194,212,215,219,221,80]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Library at the Dock.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 7;

    });

    convention.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [575,476,479,490,505,624,657]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Melbourne-Conventions-Exhbition-Centre.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 8;
    });
    museum.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [152,137,131,135,140,169,194]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Melbourne Museum.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 9;
    });
    star.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [179,75,74,69,68,96,121]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Melbourne Star Observation Wheel.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 10;
    });

    royal.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [152,137,131,135,140,169,194]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/royal-exhibition-building.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 11;
    });
    southern.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [567,1251,1329,1366,1371,1376,706]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Southern Cross Station.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 12;
    });
    state.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [650,765,785,811,818,903,777]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/SLV.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 13;

    });
    parli.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [0,268,300,333,323,334,0]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/parliament house.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 14;
    });
    sea.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [148,352,378,388,394,398,173]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/SEA LIFE Melbourne Aquarium.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 15;
    });
    st.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");


        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [1285,1440,1503,1551,1589,1732,1538]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/St Paul's Cathedral.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 16;
    });
    ngv.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");

        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [898,857,865,947,947,1036,979]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/NGV Melbourne.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 17;
    });
    old.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [153,512,548,563,575,571,214]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Old Treasury Building.png";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 18;
    });

    queenvic.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
            element.parentNode.removeChild(element);
        }
        if (document.getElementById('thechart') != null){
            var element = document.getElementById('thechart');
            element.parentNode.removeChild(element);
        }
        var canvas = document.createElement('canvas');
        canvas.id = "barchart";
        canvas.width = 200;
        canvas.height = 300;
        var box = document.getElementById("box")
        console.log(box)
        box.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        haChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"],
                datasets: [
                    {
                        label:"",
                        backgroundColor: ["#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7","#7aacc7"],
                        data: [268,0,203,0,209,217,283]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Average number of people visiting everyday'
                }
            }
        });
        document.getElementById("landmark_image").src = "./image/Queen Victoria Market.jpg";
        document.getElementById("fixedContainer2").style.visibility = "visible";
        window.hello = 19;
    });

    let navigation_button = document.getElementById("direction");
    let mapbox_direction;
    console.log(navigation_button.className);
    navigation_button.onclick = function(){
        if(navigation_button.classList.contains("direction_on")){
            gomap.removeControl(mapbox_direction);
            navigation_button.style.top = "80px";
        }else{
            mapbox_direction = new MapboxDirections({accessToken: mapboxgl.accessToken});
            gomap.addControl(mapbox_direction,'top-left');
            navigation_button.style.top = "200px";
        }
        navigation_button.classList.toggle("direction_on");
    }

}

var Sunday=[[281, 172, 130, 102, 76, 93, 155, 277, 488, 837, 1415, 1849, 2121, 2314, 2321, 2160, 2075, 1462, 948, 762, 528, 471, 364, 163],
    [130, 77, 51, 33, 25, 34, 85, 175, 437, 549, 721, 937, 1034, 1147, 1199, 1195, 1087, 921, 691, 532, 426, 338, 275, 132],
    [58, 28, 19, 15, 11, 12, 25, 83, 207, 198, 261, 371, 698, 492, 627, 723, 632, 478, 540, 258, 123, 108, 130, 52],
    [810, 460, 243, 141, 81, 76, 150, 381, 636, 1081, 1592, 2067, 2423, 2567, 2751, 2657, 2564, 2374, 2243, 1857, 1600, 1272, 867, 506],
    [670, 395, 298, 211, 112, 91, 124, 210, 399, 671, 1228, 1735, 2078, 2267, 2286, 2195, 2110, 1783, 1372, 1170, 951, 827, 632, 359],
    [670, 395, 298, 211, 112, 91, 124, 210, 399, 671, 1228, 1735, 2078, 2267, 2286, 2195, 2110, 1783, 1372, 1170, 951, 827, 632, 359],
    [305, 180, 136, 100, 75, 59, 67, 103, 162, 259, 359, 444, 476, 518, 583, 612, 580, 539, 465, 368, 326, 291, 241, 196],
    [59, 32, 18, 20, 8, 7, 10, 21, 41, 65, 88, 89, 97, 90, 89, 92, 101, 97, 98, 94, 73, 63, 52, 28],
    [253, 173, 72, 50, 35, 33, 67, 163, 292, 523, 813, 1048, 1235, 1359, 1447, 1459, 1310, 1159, 886, 444, 363, 277, 211, 132],
    [75, 34, 17, 11, 9, 10, 7, 14, 36, 78, 114, 172, 265, 297, 316, 302, 271, 260, 291, 326, 314, 239, 133, 52],
    [71, 16, 7, 4, 3, 3, 7, 23, 65, 162, 302, 363, 435, 454, 494, 474, 377, 285, 201, 182, 154, 106, 64, 33],
    [75, 34, 17, 11, 9, 10, 7, 14, 36, 78, 114, 172, 265, 297, 316, 302, 271, 260, 291, 326, 314, 239, 133, 52],
    [342, 185, 106, 89, 74, 75, 129, 312, 505, 688, 899, 945, 1012, 936, 987, 1016, 1069, 1005, 936, 702, 538, 441, 373, 248],
    [383, 255, 172, 117, 62, 48, 47, 69, 132, 263, 524, 810, 1158, 1450, 1545, 1570, 1511, 1462, 1125, 956, 789, 592, 371, 197],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [104, 72, 51, 46, 35, 31, 40, 68, 124, 196, 243, 240, 235, 223, 236, 245, 254, 229, 210, 179, 157, 145, 113, 72],
    [930, 705, 512, 416, 256, 251, 295, 326, 486, 885, 1469, 2031, 2466, 2656, 2686, 2641, 2544, 2238, 1877, 1529, 1240, 1049, 793, 549],
    [281, 172, 130, 102, 76, 93, 155, 277, 488, 837, 1415, 1849, 2121, 2314, 2321, 2160, 2075, 1462, 948, 762, 528, 471, 364, 163],
    [111, 64, 40, 24, 19, 20, 24, 51, 106, 161, 223, 266, 327, 295, 305, 294, 266, 262, 236, 183, 154, 116, 84, 53],
    [49, 35, 22, 18, 14, 18, 30, 70, 131, 275, 469, 655, 817, 862, 803, 679, 502, 261, 197, 169, 128, 107, 78, 46]
]
var Monday = [[79, 36, 23, 37, 54, 100, 307, 801, 1561, 1044, 1113, 1247, 1645, 1633, 1478, 1464, 1665, 2228, 1483, 822, 594, 586, 424, 150],
    [44, 27, 13, 9, 12, 43, 105, 274, 505, 350, 484, 594, 825, 869, 746, 728, 737, 991, 765, 477, 343, 275, 177, 78],
    [23, 10, 7, 6, 8, 62, 328, 1243, 2726, 1712, 692, 584, 1396, 1132, 660, 761, 1576, 2304, 900, 302, 164, 102, 70, 34],
    [224, 111, 54, 33, 31, 116, 528, 1168, 2533, 1532, 1263, 1489, 2668, 2649, 1941, 1886, 2226, 3281, 2481, 1683, 1367, 1131, 741, 406],
    [235, 74, 41, 39, 48, 96, 284, 766, 1491, 1036, 1186, 1322, 1811, 1793, 1665, 1609, 1819, 2493, 1701, 1071, 892, 816, 595, 301],
    [235, 74, 41, 39, 48, 96, 284, 766, 1491, 1036, 1186, 1322, 1811, 1793, 1665, 1609, 1819, 2493, 1701, 1071, 892, 816, 595, 301],
    [108, 32, 21, 17, 34, 66, 178, 436, 957, 462, 346, 392, 551, 555, 500, 549, 722, 1247, 738, 400, 313, 279, 215, 166],
    [55, 11, 4, 3, 4, 19, 84, 287, 546, 333, 194, 189, 382, 334, 208, 228, 413, 628, 337, 151, 96, 71, 46, 23],
    [76, 48, 23, 16, 23, 64, 203, 476, 774, 492, 503, 631, 893, 933, 891, 928, 1012, 1276, 894, 407, 301, 259, 188, 113],
    [18, 11, 5, 4, 5, 10, 10, 39, 110, 120, 144, 176, 329, 327, 235, 222, 197, 228, 256, 250, 244, 188, 103, 47],
    [19, 6, 3, 3, 3, 5, 20, 49, 78, 52, 64, 98, 184, 187, 130, 118, 113, 138, 125, 109, 106, 87, 59, 34],
    [18, 11, 5, 4, 5, 10, 10, 39, 110, 120, 144, 176, 329, 327, 235, 222, 197, 228, 256, 250, 244, 188, 103, 47],
    [110, 38, 25, 21, 28, 200, 697, 1828, 3329, 2066, 1407, 1356, 1973, 1904, 1539, 1857, 2853, 3766, 2134, 1068, 685, 545, 381, 224],
    [186, 52, 30, 20, 16, 28, 72, 258, 636, 602, 724, 979, 1576, 1738, 1557, 1591, 1697, 1937, 1483, 1104, 902, 620, 367, 183],
    [25, 12, 7, 7, 7, 19, 60, 206, 610, 469, 464, 458, 746, 718, 481, 440, 393, 456, 293, 190, 149, 105, 70, 38],
    [39, 19, 13, 12, 9, 42, 175, 509, 1056, 649, 446, 443, 770, 737, 460, 445, 572, 850, 458, 246, 177, 148, 107, 60],
    [276, 145, 94, 74, 78, 174, 382, 952, 1911, 1676, 1865, 2178, 2781, 2966, 2739, 2728, 2873, 3305, 2427, 1613, 1230, 1017, 672, 409],
    [79, 36, 23, 37, 54, 100, 307, 801, 1561, 1044, 1113, 1247, 1645, 1633, 1478, 1464, 1665, 2228, 1483, 822, 594, 586, 424, 150],
    [ 102, 13, 10, 9, 13, 53, 186, 657, 1630, 1035, 629, 600, 1351, 1340, 702, 603, 687, 1134, 659, 298, 239, 156, 108, 71],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
var Tuesday =[[62, 29, 20, 33, 53, 107, 347, 877, 1663, 1084, 973, 1139, 1484, 1484, 1326, 1387, 1611, 2302, 1683, 978, 653, 700, 589, 183],
    [35, 23, 11, 7, 9, 47, 139, 325, 541, 353, 371, 477, 692, 761, 659, 638, 667, 963, 781, 472, 315, 240, 180, 99],
    [16, 8, 5, 4, 5, 68, 383, 1437, 3062, 1855, 752, 632, 1475, 1201, 693, 853, 1751, 2474, 1000, 360, 191, 127, 123, 54],
    [165, 87, 43, 29, 37, 150, 689, 1370, 2710, 1564, 1212, 1451, 2649, 2663, 1868, 1852, 2251, 3462, 2684, 1824, 1453, 1248, 861, 482],
    [214, 60, 35, 35, 44, 100, 319, 838, 1597, 1048, 999, 1172, 1570, 1615, 1470, 1501, 1779, 2567, 1866, 1179, 960, 899, 716, 356],
    [214, 60, 35, 35, 44, 100, 319, 838, 1597, 1048, 999, 1172, 1570, 1615, 1470, 1501, 1779, 2567, 1866, 1179, 960, 899, 716, 356],
    [100, 27, 21, 15, 31, 69, 210, 492, 1018, 478, 351, 384, 549, 548, 489, 546, 737, 1294, 785, 429, 335, 300, 234, 177],
    [55, 7, 4, 4, 4, 20, 93, 328, 598, 359, 215, 206, 424, 363, 229, 251, 449, 673, 364, 168, 105, 79, 54, 26],
    [ 58, 42, 19, 16, 19, 66, 237, 546, 878, 523, 463, 552, 830, 886, 814, 885, 995, 1320, 933, 446, 325, 282, 221, 135],
    [16, 10, 5, 4, 5, 10, 12, 41, 114, 114, 134, 169, 319, 313, 220, 204, 182, 221, 240, 239, 234, 191, 107, 44],
    [23, 6, 4, 3, 3, 6, 26, 58, 83, 51, 57, 81, 170, 168, 113, 102, 104, 137, 140, 124, 118, 97, 69, 32],
    [16, 10, 5, 4, 5, 10, 12, 41, 114, 114, 134, 169, 319, 313, 220, 204, 182, 221, 240, 239, 234, 191, 107, 44],
    [95, 34, 22, 18, 26, 217, 788, 2017, 3578, 2194, 1437, 1380, 2060, 1987, 1623, 1983, 3038, 3957, 2275, 1147, 738, 599, 426, 249],
    [183, 45, 26, 17, 13, 27, 80, 281, 685, 620, 729, 975, 1596, 1735, 1545, 1583, 1715, 1966, 1550, 1184, 975, 680, 405, 213],
    [20, 8, 5, 4, 5, 19, 73, 239, 676, 518, 515, 501, 832, 789, 521, 475, 435, 523, 363, 220, 170, 153, 96, 46],
    [34, 16, 11, 10, 8, 42, 199, 584, 1156, 682, 462, 462, 822, 783, 492, 465, 621, 919, 498, 268, 191, 162, 117, 70],
    [173, 81, 52, 41, 60, 180, 447, 1053, 2089, 1776, 1860, 2159, 2785, 2975, 2735, 2807, 3009, 3517, 2664, 1775, 1365, 1185, 783, 510],
    [62, 29, 20, 33, 53, 107, 347, 877, 1663, 1084, 973, 1139, 1484, 1484, 1326, 1387, 1611, 2302, 1683, 978, 653, 700, 589, 183],
    [112, 15, 9, 9, 12, 57, 211, 744, 1762, 1093, 668, 638, 1404, 1406, 752, 634, 727, 1200, 728, 345, 242, 170, 126, 76],
    [22, 12, 9, 6, 7, 17, 56, 136, 256, 281, 343, 420, 559, 563, 444, 351, 261, 289, 250, 190, 152, 117, 86, 48]
]
var Wednesday=[[80, 37, 24, 35, 53, 109, 351, 882, 1661, 1129, 1080, 1382, 1830, 1595, 1491, 1703, 1771, 2318, 1710, 1248, 594, 712, 723, 222],
    [41, 22, 12, 7, 10, 50, 143, 329, 553, 358, 385, 509, 738, 780, 654, 668, 663, 964, 828, 540, 328, 266, 236, 125],
    [41, 15, 6, 4, 6, 67, 364, 1336, 2926, 1798, 751, 672, 1524, 1288, 796, 860, 1717, 2514, 1049, 374, 200, 131, 117, 45],
    [183, 89, 43, 28, 29, 150, 706, 1355, 2692, 1583, 1237, 1493, 2703, 2690, 1914, 1896, 2276, 3467, 2727, 1860, 1471, 1246, 929, 501],
    [267, 63, 37, 38, 46, 102, 328, 854, 1603, 1114, 1102, 1382, 1820, 1733, 1597, 1741, 1943, 2641, 1937, 1306, 944, 938, 853, 415],
    [267, 63, 37, 38, 46, 102, 328, 854, 1603, 1114, 1102, 1382, 1820, 1733, 1597, 1741, 1943, 2641, 1937, 1306, 944, 938, 853, 415],
    [117, 27, 21, 15, 33, 70, 216, 492, 1026, 485, 360, 405, 568, 568, 500, 560, 749, 1301, 788, 446, 337, 297, 247, 188],
    [64, 6, 4, 3, 4, 20, 96, 322, 610, 361, 221, 216, 435, 378, 239, 249, 446, 661, 373, 172, 110, 83, 58, 29],
    [69, 44, 23, 16, 20, 72, 267, 559, 901, 556, 493, 587, 871, 906, 838, 892, 1007, 1306, 936, 445, 319, 274, 229, 127],
    [15, 10, 6, 4, 6, 8, 12, 45, 119, 119, 141, 172, 325, 317, 222, 201, 184, 224, 243, 246, 244, 202, 118, 49],
    [ 21, 5, 3, 2, 2, 5, 26, 55, 81, 50, 61, 84, 167, 166, 107, 94, 92, 122, 121, 109, 105, 86, 56, 30],
    [15, 10, 6, 4, 6, 8, 12, 45, 119, 119, 141, 172, 325, 317, 222, 201, 184, 224, 243, 246, 244, 202, 118, 49],
    [103, 38, 24, 18, 26, 223, 802, 2024, 3625, 2226, 1506, 1467, 2153, 2086, 1696, 2056, 3088, 3983, 2313, 1182, 782, 631, 457, 266],
    [213, 53, 31, 19, 14, 27, 77, 283, 686, 646, 785, 1016, 1658, 1809, 1594, 1614, 1732, 2012, 1599, 1212, 1004, 710, 441, 226],
    [22, 10, 5, 4, 6, 20, 75, 244, 689, 536, 546, 564, 939, 850, 548, 549, 481, 566, 441, 286, 191, 164, 205, 55],
    [38, 19, 13, 12, 9, 43, 199, 582, 1161, 702, 471, 479, 843, 806, 511, 488, 636, 936, 512, 270, 203, 167, 130, 79],
    [241, 132, 82, 59, 65, 193, 458, 1062, 2057, 1805, 1944, 2311, 2883, 3005, 2804, 2859, 3028, 3533, 2756, 1852, 1420, 1222, 912, 538],
    [80, 37, 24, 35, 53, 109, 351, 882, 1661, 1129, 1080, 1382, 1830, 1595, 1491, 1703, 1771, 2318, 1710, 1248, 594, 712, 723, 222],
    [138, 16, 10, 10, 12, 63, 229, 756, 1766, 1110, 692, 676, 1465, 1424, 780, 655, 729, 1206, 751, 370, 252, 172, 151, 85],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
var Thursday =[[80, 36, 24, 36, 54, 109, 348, 862, 1647, 1152, 1076, 1241, 1600, 1610, 1469, 1531, 1687, 2336, 1844, 1415, 671, 824, 826, 260],
    [40, 20, 10, 6, 7, 38, 126, 305, 524, 357, 373, 472, 682, 757, 650, 644, 667, 950, 782, 517, 353, 273, 236, 145],
    [ 19, 9, 6, 4, 5, 62, 352, 1320, 2887, 1857, 782, 706, 1529, 1277, 758, 875, 1712, 2415, 1124, 417, 218, 238, 265, 73],
    [205, 87, 53, 41, 41, 150, 693, 1346, 2665, 1611, 1257, 1469, 2687, 2683, 1934, 1922, 2310, 3502, 2783, 1932, 1568, 1382, 1094, 606],
    [281, 61, 36, 36, 45, 102, 322, 835, 1585, 1126, 1075, 1271, 1681, 1715, 1589, 1629, 1876, 2649, 2052, 1403, 1026, 1039, 972, 487],
    [281, 61, 36, 36, 45, 102, 322, 835, 1585, 1126, 1075, 1271, 1681, 1715, 1589, 1629, 1876, 2649, 2052, 1403, 1026, 1039, 972, 487],
    [116, 27, 17, 13, 32, 69, 209, 484, 1009, 489, 365, 409, 566, 561, 512, 569, 763, 1285, 787, 443, 357, 328, 273, 213],
    [65, 6, 4, 3, 3, 21, 97, 329, 604, 376, 225, 222, 449, 387, 248, 262, 449, 662, 362, 175, 111, 88, 67, 38],
    [64, 40, 28, 14, 24, 67, 234, 525, 877, 559, 505, 600, 881, 916, 857, 934, 1065, 1345, 989, 482, 369, 318, 269, 159],
    [18, 11, 6, 4, 6, 9, 12, 43, 121, 123, 143, 179, 323, 321, 227, 207, 187, 235, 249, 260, 264, 220, 132, 58],
    [20, 5, 3, 2, 2, 5, 25, 51, 76, 51, 59, 78, 164, 160, 107, 93, 95, 124, 122, 113, 104, 83, 59, 33],
    [18, 11, 6, 4, 6, 9, 12, 43, 121, 123, 143, 179, 323, 321, 227, 207, 187, 235, 249, 260, 264, 220, 132, 58],
    [108, 35, 25, 18, 23, 225, 804, 2018, 3607, 2257, 1482, 1439, 2135, 2070, 1715, 2063, 3083, 3953, 2310, 1213, 813, 684, 519, 313],
    [216, 55, 32, 20, 14, 27, 77, 282, 682, 633, 738, 982, 1607, 1761, 1563, 1598, 1727, 2023, 1644, 1262, 1097, 807, 513, 280],
    [24, 11, 6, 6, 7, 20, 77, 243, 672, 545, 508, 517, 843, 812, 531, 482, 450, 578, 429, 318, 199, 157, 249, 70],
    [40, 20, 12, 11, 9, 42, 194, 583, 1168, 716, 480, 479, 845, 814, 528, 501, 655, 935, 521, 278, 205, 178, 145, 87],
    [251, 108, 62, 51, 63, 186, 446, 1050, 2065, 1818, 1951, 2255, 2837, 3036, 2833, 2861, 3083, 3664, 2888, 1980, 1573, 1369, 1042, 668],
    [80, 36, 24, 36, 54, 109, 348, 862, 1647, 1152, 1076, 1241, 1600, 1610, 1469, 1531, 1687, 2336, 1844, 1415, 671, 824, 826, 260],
    [141, 18, 11, 9, 12, 59, 223, 757, 1771, 1143, 710, 690, 1471, 1448, 806, 670, 760, 1220, 758, 391, 271, 195, 171, 104],
    [31, 15, 10, 8, 7, 19, 60, 141, 259, 289, 347, 443, 561, 561, 454, 363, 269, 295, 258, 191, 159, 135, 97, 55]]
var Friday=[[100, 50, 33, 43, 56, 106, 324, 787, 1505, 1075, 1087, 1307, 1666, 1699, 1571, 1610, 1765, 2347, 2119, 1832, 899, 1163, 1232, 491],
    [ 51, 32, 17, 11, 14, 46, 125, 284, 479, 361, 405, 527, 730, 809, 705, 696, 728, 958, 850, 670, 503, 456, 458, 311],
    [26, 13, 9, 7, 13, 63, 331, 1176, 2611, 1743, 725, 677, 1482, 1260, 768, 930, 1667, 2101, 1411, 970, 308, 310, 754, 420],
    [277, 142, 66, 49, 56, 142, 630, 1219, 2516, 1642, 1387, 1646, 2874, 2841, 2205, 2231, 2657, 3693, 3226, 2582, 2182, 2016, 1871, 1284],
    [329, 98, 57, 53, 56, 101, 307, 783, 1487, 1087, 1119, 1371, 1826, 1857, 1747, 1808, 2076, 2849, 2460, 1925, 1432, 1553, 1630, 1017],
    [329, 98, 57, 53, 56, 101, 307, 783, 1487, 1087, 1119, 1371, 1826, 1857, 1747, 1808, 2076, 2849, 2460, 1925, 1432, 1553, 1630, 1017],
    [132, 36, 27, 22, 42, 72, 202, 449, 958, 483, 389, 437, 598, 588, 553, 633, 828, 1208, 799, 542, 454, 451, 449, 393],
    [59, 8, 5, 4, 5, 21, 91, 293, 552, 352, 218, 221, 480, 408, 249, 265, 452, 597, 344, 210, 136, 118, 137, 90],
    [79, 56, 43, 28, 23, 67, 217, 470, 811, 601, 631, 728, 1004, 1071, 1046, 1127, 1268, 1501, 1210, 873, 710, 604, 468, 346],
    [22, 13, 8, 6, 6, 11, 12, 42, 116, 123, 147, 186, 331, 321, 244, 221, 210, 246, 293, 352, 387, 360, 263, 140],
    [ 23, 7, 4, 3, 2, 5, 22, 46, 69, 53, 66, 92, 164, 171, 129, 120, 124, 169, 238, 286, 185, 147, 114, 65],
    [22, 13, 8, 6, 6, 11, 12, 42, 116, 123, 147, 186, 331, 321, 244, 221, 210, 246, 293, 352, 387, 360, 263, 140],
    [138, 50, 34, 26, 32, 220, 751, 1863, 3370, 2153, 1492, 1475, 2196, 2131, 1771, 2102, 2989, 3583, 2265, 1360, 902, 794, 760, 561],
    [243, 79, 50, 31, 21, 33, 78, 258, 636, 608, 734, 981, 1631, 1791, 1592, 1651, 1805, 2145, 1823, 1504, 1345, 1176, 872, 590],
    [33, 15, 9, 7, 7, 20, 69, 225, 613, 507, 476, 520, 828, 783, 529, 483, 496, 619, 478, 379, 244, 213, 317, 144],
    [50, 26, 20, 17, 13, 42, 181, 533, 1085, 696, 490, 498, 850, 826, 545, 528, 680, 861, 500, 310, 226, 207, 213, 157],
    [323, 165, 110, 89, 91, 189, 438, 993, 1904, 1775, 1967, 2297, 2852, 3089, 2896, 2987, 3212, 3754, 3228, 2426, 1966, 1861, 1664, 1284],
    [100, 50, 33, 43, 56, 106, 324, 787, 1505, 1075, 1087, 1307, 1666, 1699, 1571, 1610, 1765, 2347, 2119, 1832, 899, 1163, 1232, 491],
    [142, 24, 15, 12, 14, 57, 209, 699, 1648, 1086, 695, 711, 1432, 1366, 786, 665, 782, 1148, 733, 452, 334, 239, 256, 193],
    [31, 18, 13, 10, 8, 21, 54, 127, 244, 274, 336, 417, 540, 535, 450, 426, 356, 314, 273, 215, 180, 152, 125, 91]]
var Saturday=[[190, 97, 72, 59, 44, 65, 87, 157, 333, 637, 990, 1450, 1890, 2302, 1952, 2085, 2190, 1760, 1695, 1671, 883, 1067, 1247, 578],
    [116, 66, 43, 27, 27, 44, 66, 131, 209, 332, 508, 701, 853, 1010, 1041, 1093, 1073, 1013, 822, 711, 552, 487, 514, 336],
    [56, 27, 17, 14, 9, 15, 43, 112, 198, 182, 228, 269, 441, 638, 360, 501, 867, 717, 1212, 1047, 245, 650, 834, 158],
    [618, 334, 172, 89, 56, 68, 189, 399, 641, 1031, 1458, 1939, 2243, 2413, 2528, 2619, 2762, 2972, 2984, 2907, 2616, 2293, 2185, 1497],
    [576, 284, 176, 116, 74, 76, 90, 172, 349, 660, 1053, 1532, 1957, 2173, 2057, 2207, 2378, 2237, 2085, 1897, 1526, 1568, 1709, 1137],
    [576, 284, 176, 116, 74, 76, 90, 172, 349, 660, 1053, 1532, 1957, 2173, 2057, 2207, 2378, 2237, 2085, 1897, 1526, 1568, 1709, 1137],
    [268, 132, 93, 66, 61, 61, 79, 119, 176, 269, 363, 440, 486, 520, 572, 613, 618, 625, 577, 480, 446, 439, 474, 422],
    [47, 21, 13, 13, 7, 10, 18, 35, 60, 83, 103, 107, 108, 105, 104, 102, 123, 144, 156, 131, 94, 100, 136, 93],
    [203, 124, 54, 35, 26, 33, 85, 213, 352, 585, 834, 1017, 1243, 1363, 1459, 1519, 1468, 1351, 1168, 664, 559, 507, 522, 395],
    [ 55, 27, 15, 10, 7, 10, 7, 17, 63, 106, 153, 188, 251, 254, 258, 256, 246, 282, 373, 496, 542, 496, 361, 193],
    [38, 12, 6, 4, 3, 3, 10, 27, 41, 61, 97, 136, 173, 199, 219, 233, 223, 238, 259, 259, 222, 182, 160, 90],
    [55, 27, 15, 10, 7, 10, 7, 17, 63, 106, 153, 188, 251, 254, 258, 256, 246, 282, 373, 496, 542, 496, 361, 193],
    [288, 142, 72, 55, 48, 87, 223, 401, 631, 850, 1063, 1149, 1184, 1143, 1138, 1175, 1284, 1281, 1209, 888, 649, 601, 797, 589],
    [371, 213, 127, 84, 46, 38, 38, 88, 161, 310, 567, 879, 1248, 1564, 1689, 1738, 1701, 1668, 1387, 1261, 1130, 984, 792, 574],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [86, 53, 35, 25, 20, 24, 48, 80, 143, 202, 252, 255, 253, 252, 263, 274, 296, 309, 277, 228, 195, 189, 236, 166],
    [863, 616, 430, 307, 191, 183, 225, 334, 648, 1123, 1675, 2257, 2742, 2957, 2929, 2962, 2951, 2783, 2409, 2105, 1770, 1627, 1555, 1281],
    [190, 97, 72, 59, 44, 65, 87, 157, 333, 637, 990, 1450, 1890, 2302, 1952, 2085, 2190, 1760, 1695, 1671, 883, 1067, 1247, 578],
    [115, 49, 29, 18, 17, 26, 48, 79, 141, 198, 245, 290, 331, 352, 340, 345, 357, 433, 430, 353, 306, 216, 239, 184],
    [51, 33, 25, 19, 13, 20, 55, 107, 210, 374, 571, 727, 814, 814, 755, 607, 395, 271, 231, 195, 165, 136, 113, 83]]

function everyday(day,landmark){
    console.log(day);
    console.log(landmark);
    console.log(day[landmark])
    if (landmark == "hello"){
        console.log("hahahahaha")
    }
    if (document.getElementById('thechart') != null){
        var element = document.getElementById('thechart');
        element.parentNode.removeChild(element);
    }
    var canvas = document.createElement('canvas');
    canvas.id = "thechart";
    canvas.width = 300;
    canvas.height = 200;
    var linechart = document.getElementById("linechart")
    console.log(linechart)
    linechart.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            datasets: [{
                data: day[landmark],
                label: "Number of people",
                strokeColor: "rgba(151,187,205,1)",
                backgroundColor: "#79acc78a",
                borderColor: "#2a5e79",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
            },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Number of Pedestrian by hour'
            }
        }
    });


}