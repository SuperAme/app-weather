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
    url = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&units=metric&APPID=6deb54b7826625462379de7db3d85c43';
    console.log(url)
    getInfo(url);
})
function getInfo(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var elem = document.getElementById('weather');
        var icon = data.weather[0].icon;
        var newIcon;
        switch(icon){
            case'01d':
                newIcon = `<i class="wi wi-day-sunny"></i>`;
            break;
            case'02d':
                newIcon = `<i class="wi wi-day-cloudy"></i>`;
            break;
            case'03d':
                newIcon = `<i class="wi wi-cloud"></i>`;
            break;
            case'04d':
                newIcon = `<i class="wi wi-cloudy"></i>`;
            break;
            case'09d':
                newIcon = `<i class="wi wi-showers"></i>`;
            break;
            case'10d':
                newIcon = `<i class="wi wi-rain"></i>`;
            break;
            case'11d':
                newIcon = `<i class="wi wi-thunderstorm"></i>`;
            break;
            case'13d':
                newIcon = `<i class="wi wi-snowflake-cold"></i>`;
            break;
            case'50d':
                newIcon = `<i class="wi wi-dust"></i>`;
            break;
            case'01n':
                newIcon = `<i class="wi wi-night-clear"></i>`;
            break;
            case'02n':
                newIcon = `<i class="wi wi-night-alt-cloudy"></i>`;
            break;
            case'03n':
                newIcon = `<i class="wi wi-cloud"></i>`;
            break;
            case'04n':
                newIcon = `<i class="wi wi-cloudy"></i>`;
            break;
            case'09n':
                newIcon = `<i class="wi wi-showers"></i>`;
            break;
            case'10n':
                newIcon = `<i class="wi wi-rain"></i>`;
            break;
            case'11n':
                newIcon = `<i class="wi wi-thunderstorm"></i>`;
            break;
            case'13n':
                newIcon = `<i class="wi wi-snowflake-cold"></i>`;
            break;
            case'50n':
                newIcon = `<i class="wi wi-dust"></i>`;
            break;
        }

        elem.innerHTML =//`<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>` +
                        newIcon +
                        `<p><br>Temperatura</br>${data.main.temp}</p>`+
                        `<p><br>Temperatura Mínima</br>${data.main.temp_min}</p>`+
                        `<p><br>Temperatura Máxima</br>${data.main.temp_max}</p>`+
                        `<p><br>Velocidad</br>${data.wind.speed}</p>`+
                        `<img src='http://openweathermap.org/img/wn/10d@2x.png'>`;
        console.log(data)
        
    })
    .catch(err => console.log(err))
}



