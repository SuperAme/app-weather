//var info = document.getElementById('weather')
/* var url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6deb54b7826625462379de7db3d85c43';
//http://api.openweathermap.org/data/2.5/weather?q=Ensenada&APPID=6deb54b7826625462379de7db3d85c43
function getInfo(){
    console.log('Hello')
    fetch(url)
    .then( res => res.json())
    .then(data => {
        let elem = document.getElementById('weather');
        elem.innerHTML = `<p>${data.city.name}</p>`
        console.log(data)
        //info.innerHTML = data
    })
    .catch(err => console.log(err))
} */
//getInfo();



$('select').hide();
$('#estados').show();
$('#empty').show();
$("#estados").on("change",function(e){
    //alert($('#estados').val())    
    switch($('#estados option:selected').val()){
        case '1':
            $('select').removeClass('estados').hide();
            $('#estados').show();            
            $('#Aguascalientes').addClass('estados').show()
        break;
        case '2':
            $('select').removeClass('estados').hide();
            $('#estados').show();
            $('#Baja_California').addClass('estados').show();            
        break;
        case '3':
            $('select').removeClass('estados').hide();
            $('#estados').show();
            $('#Baja_California_Sur').addClass('estados').show();
        break;
    } 
}) 

$("#busqueda").click(function(){
    var icon = `<i class="wi wi-dust"></i>`;
    var ciudad = $('.estados option:selected').text();
    url = 'https://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&units=metric&APPID=6deb54b7826625462379de7db3d85c43';
    //console.log(url)
    getInfo(url);
})
function getInfo(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var icon_weather = document.getElementById('icon-weather');
        var info_weather = document.getElementById('info-weather');
        var wind = document.getElementById('wind');
        var temp_max = document.getElementById('temp-max');
        var temp_min = document.getElementById('temp-min');
        var icon = data.weather[0].icon;
        var newIcon;
        switch(icon){
            case'01d':
                newIcon = `<i id='new_icon' class="wi wi-day-sunny"></i>`;
            break;
            case'02d':
                newIcon = `<i id='new_icon' class="wi wi-day-cloudy"></i>`;
            break;
            case'03d':
                newIcon = `<i id='new_icon' class="wi wi-cloud"></i>`;
            break;
            case'04d':
                newIcon = `<i id='new_icon' class="wi wi-cloudy"></i>`;
            break;
            case'09d':
                newIcon = `<i id='new_icon' class="wi wi-showers"></i>`;
            break;
            case'10d':
                newIcon = `<i id='new_icon' class="wi wi-rain"></i>`;
            break;
            case'11d':
                newIcon = `<i id='new_icon'class="wi wi-thunderstorm"></i>`;
            break;
            case'13d':
                newIcon = `<i id='new_icon' class="wi wi-snowflake-cold"></i>`;
            break;
            case'50d':
                newIcon = `<i id='new_icon' class="wi wi-dust"></i>`;
            break;
            case'01n':
                newIcon = `<i id='new_icon' class="wi wi-night-clear"></i>`;
            break;
            case'02n':
                newIcon = `<i id='new_icon' class="wi wi-night-alt-cloudy"></i>`;
            break;
            case'03n':
                newIcon = `<i id='new_icon' class="wi wi-cloud"></i>`;
            break;
            case'04n':
                newIcon = `<i id='new_icon' class="wi wi-cloudy"></i>`;
            break;
            case'09n':
                newIcon = `<i id='new_icon' class="wi wi-showers"></i>`;
            break;
            case'10n':
                newIcon = `<i id='new_icon' class="wi wi-rain"></i>`;
            break;
            case'11n':
                newIcon = `<i id='new_icon' class="wi wi-thunderstorm"></i>`;
            break;
            case'13n':
                newIcon = `<i id='new_icon' class="wi wi-snowflake-cold"></i>`;
            break;
            case'50n':
                newIcon = `<i id='new_icon' class="wi wi-dust"></i>`;
            break;
        }
        console.log(data.main.temp)
        var textTemp = '';
        if(data.main.temp < 15){
            textTemp = 'Mayormente Nublado';
        }else{
            textTemp = 'Mayormente Soleado';
        }
        icon_weather.innerHTML = `<p>${newIcon}</p>` ;
        info_weather.innerHTML = `<p class='tam'>${data.main.temp}<i class='wi wi-degrees tam'></i></p><p class='leyenda'><b>${textTemp}</b></p>`;
        wind.innerHTML = `<p><i class='wi wi-strong-wind'></i></p><p><b>${data.wind.speed}<i class='wi wi-degrees'></i> km/h</b></p>`; 
        temp_max.innerHTML = `<p><i class='wi wi-thermometer'></i></p><p><b>${data.main.temp_max}<i class='wi wi-degrees'></i>C</b></p>`;
        temp_min.innerHTML = `<p><i class='wi wi-thermometer-exterior'></i></p><p><b>${data.main.temp_min}<i class='wi wi-degrees'></i>C</b></p>`;
                        
        console.log(data)
        
    })
    .catch(err => console.log(err))
}



