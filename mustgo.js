function startMap() {
    // this.visible=true
    document.getElementById("fixedContainer2").style.visibility = "hidden";
    // document.getElementById("fixedContainer").style.visibility = "hidden";

    mapboxgl.accessToken = 'pk.eyJ1Ijoiend3YW5nNCIsImEiOiJja2dwdW5rbmkwa25wMnJxaXZjZGl3aWJoIn0.cz7Disiu_jwNDozdcG98NQ';

    // mapboxgl.accessToken = 'pk.eyJ1IjoieXVsaWdhbmciLCJhIjoiY2oycWd0N2piMDJkczJ3bndsOWs5ZWcxbyJ9.WzG80MkhSYNC2v4Mwrg-IA';

    var gomap = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/zwwang4/ckgq6pjoq28t719qhnwjr8gyn", // stylesheet location

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
        document.getElementById("fixedContainer").style.visibility = "visible";
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
        window.landmark = 0;
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
        window.hello = 1;
    });

    etihad.addEventListener('click', function(e){
        // var ctx = document.getElementById('myChart').getContext("2d");
        // if (window.haChart != null) window.haChart.destroy();
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
        window.hello = 2;
    });

    eureka.addEventListener('click', function(e){
        // var ctx = document.getElementById('myChart').getContext("2d");
        // if (window.haChart != null) window.haChart.destroy();
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
    });

    fed.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });

    flind.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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

    });
    immi.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });

    dock.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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

    });

    convention.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    museum.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    star.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });

    royal.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    southern.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    state.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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

    });
    parli.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    sea.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    st.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    ngv.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
    old.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });

    queenvic.addEventListener('click', function(e){
        if (document.getElementById('barchart') != null){
            var element = document.getElementById('barchart');
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
                        backgroundColor: ["#54478C", "#048BA8","#16DB93","#83E377","#EFEA5A","#F29E4C","#943126"],
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
    });
 }

 var Monday = [[2,3,2,2,2,2,2,5,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]]
var Tuesday = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]]

 function everyday(day,landmark){
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