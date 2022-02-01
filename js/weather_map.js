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
$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${29.426615}&lon=${-98.489567}&exclude=hourly,minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function(data){
    console.log(data);
    console.log(typeof(data));
    for(let i = 0; i < 5; i++){
        let today = data.daily[i]
        let date = new Date(today.dt * 1000);
        // console.log(date);
        let html = `<div class="col card px-0">
                    <div class="card-header text-center">${date.toLocaleDateString("en-US")}</div>                             
                    <div class="card-body">
                     <div id="lowAndHigh" class="text-center">${today.temp.min}°F / ${today.temp.max}°F}</div>   
                     <div id="icon" class="d-flex justify-content-center"><img src="https://openweathermap.org/img/w/${today.weather[0].icon}.png" alt="weather_icon" id="weather-icon"></div>
                     <hr>
                     <div id="weatherDescription">Weather Description: ${today.weather[0].description.bold()}</div>
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
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.489567, 29.426615]

});
//Draggable marker
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489567, 29.426615])
    .addTo(map);





function onDragEnd() {
    const lngLat = marker.getLngLat();
    console.log(lngLat)
    let place = reverseGeocode(lngLat, MAPBOX_TOKEN)
    // console.log(place)
    function city(){
        place.then(function(a){
            console.log(a)
            a.forEach(function(a){
                // let placeType = ['place']
                console.log(a.place_type)
                if(a.place_type[0] === 'place'){
                    console.log(a.place_name)
                    $("#currentCity").empty()
                    return $("#currentCity").append(a.place_name)
                }else {

                }
            })
        })
    }
    city()
    // console.log(city())
    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&exclude=hourly,minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function(data) {
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
                     <div id="weatherDescription">Weather Description: ${today.weather[0].description.bold()}</div>
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
marker.on('dragend', onDragEnd);

$("#addressButton").click(function(){
    let address = $("#address").val();
    console.log(address);
    geocode(address, MAPBOX_TOKEN).then(function(result) {
        console.log(result);
        // map.setCenter(result);
        map.flyTo({
            center: [result[0], result[1]],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion

        });
            marker.setLngLat([result[0], result[1]])
        console.log(marker._lngLat.lng);
        let place = reverseGeocode(marker._lngLat, MAPBOX_TOKEN)
        // console.log(place)
        function city(){
            place.then(function(a){
                console.log(a)
                a.forEach(function(a){
                    // let placeType = ['place']
                    console.log(a.place_type)
                    if(a.place_type[0] === 'place'){
                        console.log(a.place_name)
                        $("#currentCity").empty()
                        return $("#currentCity").append(a.place_name)
                    }else {

                    }
                })
            })
        }
        city()
        $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${result[1]}&lon=${result[0]}&exclude=hourly,minutely&appid=${WEATHERMAP_TOKEN}&units=imperial`).done(function(data) {
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
                     <div id="weatherDescription">Weather Description: ${today.weather[0].description.bold()}</div>
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
    });
    });