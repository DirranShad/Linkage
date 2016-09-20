$(document).ready(function() {
    $('a').click(function(event) {
        event.preventDefault();
        $(this).hide("slow");
    });

    var weatherIcon;
    var currentWeather;

    $.ajax({
        url: "https://api.forecast.io/forecast/02b0de8d458960b9309f89e3a3b73123/-33.865143,151.2099?units=si",
        dataType: "jsonp",
        success: function(apiresult) {
            console.log('Weather was successfully retrieved.');
            console.log(apiresult);
            weatherIcon = apiresult.currently.icon
            currentWeather = apiresult.currently.temperature
            iconCheck()
        }
    });

    function iconCheck() {
        if (weatherIcon == "clear-night") {
            weatherIcon = "clear-day";
            printWeather()
        } else if (weatherIcon == "partly-cloudy-night") {
            weatherIcon = "partly-cloudy-day"
            printWeather()
        } else {
            printWeather()
        } if (weatherIcon == "partly-cloudy-day") {
            $('#weatherIcon').css({'margin-top': '-20px', 'margin-right': '-19px'})
        }
    }

    function printWeather() {
        $('#credit').before('<p id="weathertext">Sydney: <br> ' + currentWeather + '°c </p>');
        $('#weathertext').before('<img id="weatherIcon" src="img/' + weatherIcon + '.svg">');
        $("body").fadeIn(900);
        getQuote()
    }

    function getQuote() {
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback", function(a) {
        $(".quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
      });
      //$("body").fadeIn(900);
    }

    /*function getQuote() {
        $.ajax({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=quote'
            dataType: 'jsonp',
            success: function(quote) {
                console.log('Your quote was successfully retrieved.');
                console.log(quote);
                $(".quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
                $("body").fadeIn(900);
            }
            /*error: function(error) {
                console.log('error');
                $("body").fadeIn(900);
            }
        });
    }*/

});
