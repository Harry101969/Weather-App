// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '85dbcdf126mshcf90934cf6fcf6ap141cafjsn47bff480e671',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const city = document.querySelector('.input-location');
const submitBtn = document.querySelector('.submitBtn');

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.log(err));
}
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (city.value == '') {
        getWeather('Delhi')
    } else if (city.value != '') {
        getWeather(city.value);
    }
    city.value = '';
    cityName.focus();
})

getWeather('Delhi')


//base other cities ke liye info
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
    })
    .catch(err => console.log(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
    })
    .catch(err => console.log(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=paris', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset
    })
    .catch(err => console.log(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shangai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct6.innerHTML = response.cloud_pct
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        humidity6.innerHTML = response.humidity
        min_temp6.innerHTML = response.min_temp
        max_temp6.innerHTML = response.max_temp
        wind_speed6.innerHTML = response.wind_speed
        sunrise6.innerHTML = response.sunrise
        sunset6.innerHTML = response.sunset
    })
    .catch(err => console.log(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct7.innerHTML = response.cloud_pct
        temp7.innerHTML = response.temp
        feels_like7.innerHTML = response.feels_like
        humidity7.innerHTML = response.humidity
        min_temp7.innerHTML = response.min_temp
        max_temp7.innerHTML = response.max_temp
        wind_speed7.innerHTML = response.wind_speed
        sunrise7.innerHTML = response.sunrise
        sunset7.innerHTML = response.sunset
    })
    .catch(err => console.log(err));



