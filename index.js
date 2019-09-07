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
    var ciudad = $('.estados option:selected').text();
    url = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&units=metric&APPID=6deb54b7826625462379de7db3d85c43';
    getInfo(url);
})
function getInfo(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        var elem = document.getElementById('weather');
        elem.innerHTML = `<p><br>Temperatura</br>${data.main.temp}</p>`+
                        `<p><br>Temperatura Mínima</br>${data.main.temp_min}</p>`+
                        `<p><br>Temperatura Máxima</br>${data.main.temp_max}</p>`+
                        `<p><br>Velocidad</br>${data.wind.speed}</p>`+
                        `<img src='http://openweathermap.org/img/wn/10d@2x.png'>`;
        console.log(data)
        
    })
    .catch(err => console.log(err))
}



