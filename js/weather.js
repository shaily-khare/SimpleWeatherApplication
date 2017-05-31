$(document).ready(function () {
    $('#submitWeather').click(function () {

        var city = $("#city").val();
       if(city != ''){

           $.ajax({

               url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric"+
               "&APPID=25b93c38b34a1b01cfc21f855baf6d39",
               type:"GET",
               dataType:"jsonp",
               success:function (data) {
                  // console.log(data);

                   var result = show(data);
                   $("#showResult").html(result);

                   $("#city").val('');
               }
           });

       }else{
           $('#error').html("<div class='alert alert-danger text-center' id='errorCity' > <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
       }
    });
});

function show(data) {

    return  "<h3 class='text-center' style='font-size: 30px; padding-bottom: 20px; font-weight: bold;'>Current Weather for " + data.name  + ", " +  data.sys.country + "</h3>" +
            "<h4 class='returnresult'><strong>Weather</strong>: "+ data.weather[0].main +" </h4>" +
            "<h4 class='returnresult'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> "+ data.weather[0].description +" </h4>" +
            "<h4 class='returnresult'><strong>Temperature</strong>: "+ data.main.temp +" &deg;C </h4>" +
            "<h4 class='returnresult'><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h4>" +
            "<h4 class='returnresult'><strong>Humidity</strong>: "+ data.main.humidity +" %</h4>" +
            "<h4 class='returnresult'><strong>Minimum Temperature</strong>: "+ data.main.temp_min +" &deg;C</h4>" +
            "<h4 class='returnresult'><strong>Maximum Temperature</strong>: "+ data.main.temp_max +" &deg;C</h4>" +
            "<h4 class='returnresult'><strong>Wind Speed</strong>: "+ data.wind.speed +" m/s</h4>" +
            "<h4 class='returnresult'><strong>Wind Direction</strong>: "+ data.wind.deg +" &deg;C</h4>" ;

}