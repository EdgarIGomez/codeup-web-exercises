// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${-98.489567}&lon=${29.426615}&appid=${WEATHERMAP_TOKEN}`)
//     .done(function(weather){
//         console.log(weather)
//     })

$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.426615}&lon=${-98.489567}&appid=${WEATHERMAP_TOKEN}&units=metric`)
    .done(function(data){
        console.log(data);
        $("#tempFeelsLike").append(`${data.main.feels_like}°F / ${data.main.temp}°F`)
        $("#weatherDescription").append(`${data.weather[0].description.bold()}`);
        // let humidity = data.main.humidity.toString().bold()
        // console.log(typeof(humidity))
        $("#humidity").append(`${data.main.humidity.toString().bold()}`);
        $("#wind").append(`${data.wind.speed.toString().bold()}`);
        $("#pressure").append(`${data.main.pressure.toString().bold()}`);
        $("#weather-icon").attr("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    });