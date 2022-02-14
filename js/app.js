import {api_key} from 'private.js';

var body = document.querySelector('.body')
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var descImg = document.querySelector('.desc-img')
var city = document.querySelector('.city')
var temp = document.querySelector('.temp')
var appear = document.querySelector('.appear')
var humidity = document.querySelector('.humidity')
var apiKey = api_key;


button.addEventListener('click', function() {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        var cityValue = data['name'];
        var appearValue = data['weather'][0]['description'];
        var tempValue = data['main']['temp'];
        var humidityValue = data['main']['humidity'];
        var descImgValue = data['weather'][0]['icon'];

        var repair


        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        appear.innerHTML = appearValue;
        humidity.innerHTML = humidityValue;
        descImg.style.backgroundImage = `url('http://openweathermap.org/img/wn/${descImgValue}@2x.png')`;
        body.style.backgroundImage = `url('assets/images/${descImgValue.substring(0, 2)}.jpg')`;

        console.log(data);
    })
    .catch(err => alert("wrong city name!"));
})