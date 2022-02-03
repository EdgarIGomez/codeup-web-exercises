// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${-98.489567}&lon=${29.426615}&appid=${WEATHERMAP_TOKEN}`)
//     .done(function(weather){
//         console.log(weather)
//     })

// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.426615}&lon=${-98.489567}&appid=${WEATHERMAP_TOKEN}&units=metric`)
//     .done(function(data){
//         console.log(data);
//         $("#tempFeelsLike").append(`${data.main.feels_like}°F / ${data.main.temp}°F`)
//         $("#weatherDescription").append(`${data.weather[0].description.bold()}`);
//         // let humidity = data.main.humidity.toString().bold()
//         // console.log(typeof(humidity))
//         $("#humidity").append(`${data.main.humidity.toString().bold()}`);
//         $("#wind").append(`${data.wind.speed.toString().bold()}`);
//         $("#pressure").append(`${data.main.pressure.toString().bold()}`);
//         $("#weather-icon").attr("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
//     });

// $.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${29.426615}&lon=${-98.489567}&dt=${Math.round(new Date().getTime()/1000)}&appid=${WEATHERMAP_TOKEN}&units=metric`).done(function(data){
//     console.log(data)
// });
//% day Weather Forecast
//Initial weather forecast info
$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${29.426615}&lon=${-98.489567}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
    console.log(data);
    console.log(typeof (data));
    for (let i = 0; i < 5; i++) {
        let today = data.daily[i]
        let date = new Date(today.dt * 1000);
        // console.log(date);
        let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
        $("#weatherRow").append(html);
    }
    // data.daily.forEach(function(element){
    // });
});
// Map
mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-98.489567, 29.426615]

});
//Draggable marker
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489567, 29.426615])
    .addTo(map);

let switchWeather = 1
let currentWeatherMode = 1
/// Dragging marker
function onDragEnd() {
    const lngLat = marker.getLngLat();
    console.log(lngLat)
    let place = reverseGeocode(lngLat, MAPBOX_TOKEN)
    // console.log(place)
    //Getting city from dragging marker and placing it somewhere
    function city() {
        place.then(function (a) {
            console.log(a)
            //For loop had to be used so that we can break out of loop with return
            for (let i = 0; i < a.length; i++) {
                console.log(a[i].place_type)
                let currentCity = $("#currentCity")
                if (a[i].place_type[0] === 'place') {
                    console.log(a[i].place_name)
                    currentCity.empty()
                    return currentCity.append(a[i].place_name)
                } else if (a[i].place_type[0] === 'region') {
                    currentCity.empty()
                    return currentCity.append(a[i].place_name)
                } else {

                }
            }
            //Cannot break out of loop with return
            // a.forEach(function(a){
            //     // let placeType = ['place']
            //     console.log(a.place_type)
            //     let currentCity = $("#currentCity")
            //     if(a.place_type[0] === 'place'){
            //         console.log(a.place_name)
            //         currentCity.empty()
            //         return currentCity.append(a.place_name)
            //     }else if(a.place_type[0] === 'region'){
            //         currentCity.empty()
            //         return currentCity.append(a.place_name)
            //     }else {
            //
            //     }
            // })
        })
    }

    city()
    // console.log(city())
    //Getting weather details for the area thw marker was dropped on the map
    if(currentWeatherMode === 2){
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
            console.log(data);
            console.log(typeof (data));
            $("#weatherRow").empty()
            let currentDate = data.current
            let date = new Date(currentDate.dt * 1000);
            // console.log(date);
            let html = `<div class="col card px-0 text-center">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">Current Temperature: ${currentDate.temp}°F}</div>
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${currentDate.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${currentDate.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${currentDate.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${currentDate.wind_speed.toString().bold()}</div>
                    <hr>
                    <div id="pressure">Pressure: ${currentDate.pressure.toString().bold()}</div>
                    </div>
                    </div>`;
            $("#weatherRow").append(html);
        });

    } else {
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
            console.log(data);
            console.log(typeof (data));
            $("#weatherRow").empty()
            for (let i = 0; i <= 4; i++) {
                let today = data.daily[i]
                let date = new Date(today.dt * 1000);
                // console.log(date);
                let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
                $("#weatherRow").append(html);

            }
        });
    }
    // $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
    //     console.log(data);
    //     console.log(typeof (data));
    //     $("#weatherRow").empty()
    //     for (let i = 0; i <= 4; i++) {
    //         let today = data.daily[i]
    //         let date = new Date(today.dt * 1000);
    //         // console.log(date);
    //         let html = `<div class="col card px-0">
    //                 <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>
    //                 <div class="card-body">
    //                  <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>
    //                  <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
    //                  <hr>
    //                  <div id="weatherDescription">Weather Description: </div>
    //                  <div>${today.weather[0].description.bold()}</div>
    //                  <hr>
    //                  <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
    //                  <hr>
    //                 <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div>
    //                 <hr>
    //                 <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
    //                 </div>
    //                 </div> `;
    //         $("#weatherRow").append(html);
    //
    //     }
    // });
}

marker.on('dragend', onDragEnd);
///Putting in location manually typing it by adding an event to the button
$("#addressButton").click(function () {
    let address = $("#address").val();
    console.log(address);
    geocode(address, MAPBOX_TOKEN).then(function (result) {
        console.log(result);
        // map.setCenter(result);
        map.flyTo({
            center: [result[0], result[1]],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        //giving marker new lng and lat for it to display in the new area
        marker.setLngLat([result[0], result[1]])
        console.log(marker._lngLat.lng);
        //Getting city name for current city div from coordinates from inputting name of place
        let place = reverseGeocode(marker._lngLat, MAPBOX_TOKEN)

        // console.log(place)
        function city() {
            place.then(function (a) {
                console.log(a)
                //For loop had to be used so that we can break out of loop with return
                for (let i = 0; i < a.length; i++) {
                    console.log(a[i].place_type)
                    let currentCity = $("#currentCity")
                    if (a[i].place_type[0] === 'place') {
                        console.log(a[i].place_name)
                        currentCity.empty()
                        return currentCity.append(a[i].place_name)
                    } else if (a[i].place_type[0] === 'region') {
                        currentCity.empty()
                        return currentCity.append(a[i].place_name)
                    } else {

                    }
                }
                //for each doesn't stop even with return so could not be used
                // a.forEach(function(a){
                //     // let placeType = ['place']
                //     console.log(a.place_type)
                //     let currentCity = $("#currentCity")
                //     if(a.place_type[0] === 'place'){
                //         console.log(a.place_name)
                //         currentCity.empty()
                //         return currentCity.append(a.place_name)
                //     }else if(a.place_type[0] === 'region') {
                //         currentCity.empty()
                //         return currentCity.append(a.place_name)
                //     }else {
                //
                //     }
                // })
            })
        }
        city()
        //Getting new weather details for when someplace is typed in the input bar
        if(currentWeatherMode === 2){
            $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${result[1]}&lon=${result[0]}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
                console.log(data);
                console.log(typeof (data));
                $("#weatherRow").empty()
                let currentDate = data.current
                let date = new Date(currentDate.dt * 1000);
                // console.log(date);
                let html = `<div class="col card px-0 text-center">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">Current Temperature: ${currentDate.temp}°F}</div>
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${currentDate.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${currentDate.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${currentDate.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${currentDate.wind_speed.toString().bold()}</div>
                    <hr>
                    <div id="pressure">Pressure: ${currentDate.pressure.toString().bold()}</div>
                    </div>
                    </div>`;
                $("#weatherRow").append(html);
            });
        } else{
            $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${result[1]}&lon=${result[0]}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
                console.log(data);
                console.log(typeof (data));
                $("#weatherRow").empty()
                for (let i = 0; i <= 4; i++) {
                    let today = data.daily[i]
                    let date = new Date(today.dt * 1000);
                    // console.log(date);
                    let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
                    $("#weatherRow").append(html);
                }
            });
        }

    });
});


$("#switchWeather").click(function(){
    let latlng = marker.getLngLat()
    console.log(latlng);
    console.log(switchWeather);
    if(switchWeather === 1){
        switchWeather = 2;
        currentWeatherMode = 2
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlng.lat}&lon=${latlng.lng}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
            console.log(data);
            console.log(typeof (data));
            $("#weatherRow").empty()
            let currentDate = data.current
            let date = new Date(currentDate.dt * 1000);
            // console.log(date);
            let html = `<div class="col card px-0 text-center">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">Current Temperature: ${currentDate.temp}°F}</div>
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${currentDate.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${currentDate.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${currentDate.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${currentDate.wind_speed.toString().bold()}</div>
                    <hr>
                    <div id="pressure">Pressure: ${currentDate.pressure.toString().bold()}</div>
                    </div>
                    </div>`;
            $("#weatherRow").append(html);
    });

    } else {
        switchWeather = 1
        currentWeatherMode = 1
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlng.lat}&lon=${latlng.lng}&exclude=minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function (data) {
            console.log(data);
            console.log(typeof (data));
            $("#weatherRow").empty()
            for (let i = 0; i <= 4; i++) {
                let today = data.daily[i]
                let date = new Date(today.dt * 1000);
                // console.log(date);
                let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: </div>
                     <div>${today.weather[0].description.bold()}</div>
                     <hr>
                     <div id="humidity">Humidity: ${today.humidity.toString().bold()}</div>
                     <hr>
                    <div id="wind">Wind: ${today.wind_speed.toString().bold()}</div> 
                    <hr>
                    <div id="pressure">Pressure: ${today.pressure.toString().bold()}</div>
                    </div>
                    </div> `;
                $("#weatherRow").append(html);

            }
        });
    }
})