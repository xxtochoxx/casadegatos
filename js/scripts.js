(function($) {

    // ask-courtain
    $('.ask-courtain .courtain').on('click', function() {
        //...
    });

    // ask-weather
/*
NOTA: openweather es un servivio web que provee información del clima.

Por ejemplo, para este url: http://api.openweathermap.org/data/2.5/weather?q=Lima,PE&units=metric&mode=json&lang=es
devuelve datos con esta estructura:

    {
        "coord": {
            "lon": -77.03,
            "lat": -12.04
        },
        "sys": {
            "message": 0.019,
            "country": "PE",
            "sunrise": 1428923581,
            "sunset": 1428966243
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "nubes dispersas",
            "icon": "03n"
        }],
        "base": "stations",
        "main": {
            "temp": 17.522,
            "temp_min": 17.522,
            "temp_max": 17.522,
            "pressure": 866.91,
            "sea_level": 1025.13,
            "grnd_level": 866.91,
            "humidity": 78
        },
        "wind": {
            "speed": 0.86,
            "deg": 98.5094
        },
        "clouds": {
            "all": 32
        },
        "dt": 1428901154,
        "id": 3936456,
        "name": "Lima",
        "cod": 200
    }
    
Para más información: http://openweathermap.org/weather-data#current
*/
    $('.weather-btn').on('click', function() {
        $btn = $(this);
        $btn.addClass('active');

        var url;

        $.ajax({
            url: url,
            method: 'get',
            dataType: 'json'
        }).done(function(data) {
            $btn.removeClass('active');
            //...
        });

    }).click();

})(jQuery);