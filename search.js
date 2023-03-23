function init() {
    console.log("its working");

    if (document.getElementById("search_button") != null) {
        document.getElementById("search_button").addEventListener("click", search => {
            var location = document.getElementById('search').value;

            console.log("its working2");

            var ajaxConnection = new XMLHttpRequest();

            ajaxConnection.open("GET", `search_place.php?region=${location}`);

            ajaxConnection.addEventListener("load", e => {

                var output = "";

                console.log("its working3");



                var location = JSON.parse(e.target.responseText);

                if (ajaxConnection.status == 200) {

                    location.forEach(a => {


                        output = output +
                            `       <div>

                    <p> <img src="https://edward2.solent.ac.uk/~nevesl/Project/project2019/images/1-4.png" alt="${a.img_desc}" style="width:128px;height:128px;">  
                    <h2 align="left">${a.name}</h2>  <h2 align="left" id="name">User name </h2> </p>
                    <h3 aling="left">  ${a.region} </h3>
                    <p align="left">   ${a.type} </p>
                    <p align="left"> <a href="description.php?id=${a.ID}"> Full description link </a>
                    </div>`
                    });

                    document.getElementById("output").innerHTML = output;
                }

                else {
                    console.log("its working4 but something is wrong");


                };

            });

            ajaxConnection.send();

        });
    }


    //add place

    if (document.getElementById("add_att") != null) {
        document.getElementById("add_att").addEventListener("click", add => {

            vex.defaultOptions.className = 'vex-theme-flat-attack';

            /* how to ajaxRequest if the user is logged in*/

            var userna = sessionStorage.getItem("username");

            var passwo = sessionStorage.getItem("password");

            var http = new XMLHttpRequest();
            var url = 'login.php';
            var params = 'username=' + userna + '&password=' + passwo;
            http.open('POST', url, true);

            //Send the proper header information along with the request
            http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            http.onreadystatechange = function () {//Call a function when the state changes.

                if (http.status == 401)//sessionStorage.getItem('status') != null)
                {
                    window.alert('you need to login to add an attraction');

                    vex.dialog.open({
                        message: 'Enter your username and password:',
                        input: [
                            '<input name="username" type="text" placeholder="Username" required />',
                            '<input name="password" type="password" placeholder="Password" required />'
                        ].join(''),
                        buttons: [
                            $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
                            $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                        ],
                        callback: function (data) {

                            if (!data) {
                                console.log('Cancelled')
                            }
                            else {
                                console.log('Username', data.username, 'Password', data.password)

                                var log = new XMLHttpRequest();

                                var details = new FormData();

                                details.append("username", data.username); // with "" or not

                                details.append("password", data.password);

                                log.ajaxConnection.addEventListener("load", {});

                                vex.dialog.alert({ unsafeMessage: '<b>so far so good</b>' });

                                log.open("POST", "login.php");

                                log.send(details);

                                if (e.status == 401) {
                                    vex.dialog.alert({ unsafeMessage: '<b>Wrong details</b>' })
                                }
                                else if (e.status == 200) {



                                    vex.dialog.open({
                                        message: 'Enter your attraction',
                                        input: [
                                            '<input name="name" type="text" placeholder="Name" required />',
                                            '<input name="type" type="text" placeholder="Type (city, momument, ect)" required />',
                                            '<input name="country" type="text" placeholder="Country" required />',
                                            '<input name="region" type="text" placeholder="Region)" required />',
                                            '<input name="desc" type="text" placeholder="Tdescription" required />',
                                            '<input name="lat" type="hidden" placeholder="Latitude"  />',
                                            '<input name="lon" type="hidden" placeholder="Longitute"  />',
                                        ].join(''),

                                        buttons: [
                                            $.extend({}, vex.dialog.buttons.YES, { text: 'OK' }),
                                            $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                                        ],
                                        callback: function (data) {
                                            if (!data) {
                                                console.log('Cancelled')
                                            }
                                            else {

                                                var add = new XMLHttpRequest();

                                                var desc = new FormData();

                                                desc.append("name", data.name);

                                                desc.append("type", data.type);

                                                desc.append("country", data.country);

                                                desc.append("region", data.region);

                                                desc.append("desc", data.desc);

                                                desc.append("lat", data.lat);

                                                desc.append("lon", data.lon);

                                                add.ajaxConnection.addEventListener("load", e => {
                                                    console.log("everything is alrght");
                                                });
                                                add.open("POST", "add_place.php");

                                                add.send(details);
                                            };
                                        }
                                    });
                                }
                            }
                        }
                    });
                }

                else if (http.status == 200) {


                    vex.dialog.open({
                        message: 'Enter your attraction',
                        input: [
                            '<input name="name" type="text" placeholder="Name" required />',
                            '<input name="type" type="text" placeholder="Type (city, momument, ect)" required />',
                            '<input name="country" type="text" placeholder="Country" required />',
                            '<input name="region" type="text" placeholder="Region)" required />',
                            '<input name="desc" type="text" placeholder="Tdescription" required />',
                            '<input name="lat" type="hidden" placeholder="Latitude"  />',
                            '<input name="lon" type="hidden" placeholder="Longitute"  />',
                        ].join(''),

                        buttons: [
                            $.extend({}, vex.dialog.buttons.YES, { text: 'OK' }),
                            $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                        ],
                        callback: function (data) {
                            if (!data) {
                                console.log('Cancelled')
                            }
                            else {
                                console.log("Make the PHP request'")
                                var add = new XMLHttpRequest();

                                var desc = new FormData();


                                var http = new XMLHttpRequest();
                                var url = 'add_place.php';
                                var params = 'name=' + data.name + '&type=' + data.type + '&country=' + data.country + '&region=' + data.region + '&desc=' + data.desc + '&lat=' + data.lat + '&lon=' + data.lon
                                http.open('POST', url, true);

                                //Send the proper header information along with the request
                                http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                                http.onreadystatechange = function () {//Call a function when the state changes.

                                    if (http.status == 200)//sessionStorage.getItem('status') != null)
                                    {
                                        alert('Woo');
                                    }
                                    else {
                                        alert('Doesnt work')
                                    }
                                }
                                http.send(params);
                            }

                            
                        }
                    });

                }
                else {
                    console.log("something is wrong");
                }
            }
            http.send(params);




            /*
                        if (e.status == 401)//sessionStorage.getItem('status') != null)
                        {
                            window.alert('you need to login to add an attraction');
            
                            vex.dialog.open({
                                message: 'Enter your username and password:',
                                input: [
                                    '<input name="username" type="text" placeholder="Username" required />',
                                    '<input name="password" type="password" placeholder="Password" required />'
                                ].join(''),
                                buttons: [
                                    $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
                                    $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                                ],
                                callback: function (data) {
            
                                    if (!data) {
                                        console.log('Cancelled')
                                    }
                                    else {
                                        console.log('Username', data.username, 'Password', data.password)
            
                                        var log = new XMLHttpRequest();
            
                                        var details = new FormData();
            
                                        details.append("username", data.username); // with "" or not
            
                                        details.append("password", data.password);
            
                                        log.ajaxConnection.addEventListener("load", {});
            
                                        vex.dialog.alert({ unsafeMessage: '<b>so far so good</b>' });
            
                                        log.open("POST", "login.php");
            
                                        log.send(details);
            
                                        if (log.status == 401) {
                                            vex.dialog.alert({ unsafeMessage: '<b>Wrong details</b>' })
                                        }
                                        else if (log.status == 200) {
            
            
            
                                            vex.dialog.open({
                                                message: 'Enter your attraction',
                                                input: [
                                                    '<input name="name" type="text" placeholder="Name" required />',
                                                    '<input name="type" type="text" placeholder="Type (city, momument, ect)" required />',
                                                    '<input name="country" type="text" placeholder="Country" required />',
                                                    '<input name="region" type="text" placeholder="Region)" required />',
                                                    '<input name="desc" type="text" placeholder="Tdescription" required />',
                                                    '<input name="lat" type="hidden" placeholder="Latitude"  />',
                                                    '<input name="lon" type="hidden" placeholder="Longitute"  />',
                                                ].join(''),
            
                                                buttons: [
                                                    $.extend({}, vex.dialog.buttons.YES, { text: 'OK' }),
                                                    $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                                                ],
                                                callback: function (data) {
                                                    if (!data) {
                                                        console.log('Cancelled')
                                                    }
                                                    else {
            
                                                        var add = new XMLHttpRequest();
            
                                                        var desc = new FormData();
            
                                                        desc.append("name", data.name);
            
                                                        desc.append("type", data.type);
            
                                                        desc.append("country", data.country);
            
                                                        desc.append("region", data.region);
            
                                                        desc.append("desc", data.desc);
            
                                                        desc.append("lat", data.lat);
            
                                                        desc.append("lon", data.lon);
            
                                                        add.ajaxConnection.addEventListener("load", e => {
                                                            console.log("everything is alrght");
                                                        });
                                                        add.open("POST", "add_place.php");
            
                                                        add.send(details);
                                                    };
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        }
            
                        else if (e.status == 200) {
            
            
                            vex.dialog.open({
                                message: 'Enter your attraction',
                                input: [
                                    '<input name="name" type="text" placeholder="Name" required />',
                                    '<input name="type" type="text" placeholder="Type (city, momument, ect)" required />',
                                    '<input name="country" type="text" placeholder="Country" required />',
                                    '<input name="region" type="text" placeholder="Region)" required />',
                                    '<input name="desc" type="text" placeholder="Tdescription" required />',
                                    '<input name="lat" type="hidden" placeholder="Latitude"  />',
                                    '<input name="lon" type="hidden" placeholder="Longitute"  />',
                                ].join(''),
            
                                buttons: [
                                    $.extend({}, vex.dialog.buttons.YES, { text: 'OK' }),
                                    $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                                ],
                                callback: function (data) {
                                    if (!data) {
                                        console.log('Cancelled')
                                    }
                                    else {
            
                                        var add = new XMLHttpRequest();
            
                                        var desc = new FormData();
            
                                        desc.append("name", data.name);
            
                                        desc.append("type", data.type);
            
                                        desc.append("country", data.country);
            
                                        desc.append("region", data.region);
            
                                        desc.append("desc", data.desc);
            
                                        desc.append("lat", data.lat);
            
                                        desc.append("lon", data.lon);
            
                                        add.ajaxConnection.addEventListener("load", e => {
                                            console.log("everything is alrght");
                                        });
                                        add.open("POST", "add_place.php");
            
                                        add.send(details);
                                    }
                                }
                            });
            
                        }
                        else {
                            console.log("something is wrong");
                        }
            
                        */

        });
    }




    // login 

    if (document.getElementById("login") != null) {
        document.getElementById("login").addEventListener("click", login => {

            window.alert('Please login here');

            vex.dialog.open({
                message: 'Enter your username and password:',
                input: [
                    '<input name="username" type="text" placeholder="Username" required />',
                    '<input name="password" type="password" placeholder="Password" required />'
                ].join(''),
                buttons: [
                    $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
                    $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                ],
                callback: function (data) {

                    if (!data) {
                        console.log('Cancelled')
                    }
                    else {
                        var http = new XMLHttpRequest();
                        var url = 'login.php';
                        var params = 'username=' + data.username + '&password=' + data.password;
                        http.open('POST', url, true);

                        //Send the proper header information along with the request
                        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                        http.onreadystatechange = function () {//Call a function when the state changes.

                            if (http.status == 200) {
                                alert(http.responseText);
                                sessionStorage.setItem("username", data.username);

                                sessionStorage.setItem("password", data.password);
                            }
                            else {
                                alert('<b>Wrong details</b>')
                            }
                        }
                        http.send(params);

                    }
                }
            });

        });
    }



    // add review

    if (document.getElementById("add_review") != null) {
        document.getElementById("add_review").addEventListener("click", ajaxRequest => {


            vex.defaultOptions.className = 'vex-theme-flat-attack';

            /* how to ajaxRequest if the user is logged in*/

            var userna = sessionStorage.getItem("username");

            var passwo = sessionStorage.getItem("password");


            var ajaxRequest = new XMLHttpRequest();

            var details = new FormData();

            details.append("username", userna);

            details.append("password", passwo);

            ajaxRequest.addEventListener("load", e => {


                if (e.target.status == 401)//sessionStorage.getItem('status') != null)
                {


                    window.alert('you need to login to add an attraction');

                    vex.dialog.open(
                        {
                            message: 'Enter your username and password:',
                            input: [
                                '<input name="username" type="text" placeholder="Username" required />',
                                '<input name="password" type="password" placeholder="Password" required />'
                            ].join(''),
                            buttons: [
                                $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
                                $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                            ],
                            callback: function (data) {

                                if (!data) {
                                    console.log('Cancelled')
                                }
                                else {
                                    console.log('Username', data.username, 'Password', data.password)

                                    var log = new XMLHttpRequest();

                                    var details = new FormData();

                                    details.append("username", data.username);

                                    details.append("password", data.password);

                                    log.ajaxConnection.addEventListener("load", e => {
                                        if (e.status == 401) {
                                            vex.dialog.alert({ unsafeMessage: '<b>Wrong details</b>' })
                                        }
                                        else if (e.status == 200) {



                                            vex.dialog.open({
                                                message: 'Write youre review:',
                                                input: [
                                                    '<input name="id" type="text" placeholder="id" required />',
                                                    '<input name="review" type="text" placeholder="REview)" required />'
                                                ].join(''),

                                                buttons: [
                                                    $.extend({}, vex.dialog.buttons.YES, { text: 'OK' }),
                                                    $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
                                                ],
                                                callback: function (data) {
                                                    if (!data) {
                                                        console.log('Cancelled')
                                                    }
                                                    else {

                                                        var add = new XMLHttpRequest();

                                                        var desc = new FormData();

                                                        desc.append("name", data.id);

                                                        desc.append("type", data.review);

                                                        add.ajaxConnection.addEventListener("load", {/*ask what should I put here*/ });
                                                        add.open("POST", "add_review.php");

                                                        add.send(details);
                                                    };
                                                }
                                            });
                                        }
                                        else {

                                            console.log("something is wrong 2");
                                        }

                                    });

                                    vex.dialog.alert({ unsafeMessage: '<b>so far so good</b>' });

                                    log.open("POST", "login.php");

                                    log.send(details);


                                };
                            }
                        });
                }
            })



            ajaxRequest.open("POST", "login.php");

            ajaxRequest.send(details);



        });
    }

};
