$(document).ready(function() {
    if (localStorage.getItem("personname") === null) {
        window.location = '../more_pages/personalisation.html';
    } else {
        var personname = localStorage.getItem("personname");
        var quotesetting = localStorage.getItem("quotesetting")
        var weathersetting = localStorage.getItem("weathersetting")
        var background = Math.floor((Math.random() * 8) + 1);//localStorage.getItem("background")
        $('#name').html(personname);
        $('body').css('background-image', 'url(../img/' + background + '.jpg)');
        if (quotesetting == true) {
            //display quote
        } else {
            //dont display quote
        }
        if (weathersetting == true) {
            //do cached weather
        } else {
            getWeather()
        }
    }
});

function checkConnection() {
    var weatherIcon, currentWeather;
    var d = new Date();
    if (navigator.onLine) {
        getWeather();
    } else {
        $('#weatherIcon').css('float', 'none');
        $('#credit').css('float', 'none');
        $('#message').css('margin-top', '75px');
        $("body").fadeIn(900);
    }
}

function getWeather() {
    //if () {}
    $.ajax({
        url: "https://api.darksky.net/forecast/02b0de8d458960b9309f89e3a3b73123/-33.865143,151.2099?units=si&exclude=minutely,hourly,alerts,flags",
        dataType: "jsonp",
        success: function(apiresult) {
            console.log('Weather was successfully retrieved.');
            console.log(apiresult);
            weatherIcon = apiresult.currently.icon
            currentWeather = apiresult.currently.temperature
            iconCheck()
        }
    });
}

function iconCheck() {
    if (weatherIcon == "clear-night") {
        weatherIcon = "clear-day";
        printWeather()
    } else if (weatherIcon == "partly-cloudy-night") {
        weatherIcon = "partly-cloudy-day"
        printWeather()
    } else {
        printWeather()
    }
    if (weatherIcon == "partly-cloudy-day") {
        $('#weatherIcon').css({
            'margin-top': '-20px',
            'margin-right': '-19px'
        })
    }
}

function printWeather() {
    $('#weathertext').html("Sydney:<br>" + currentWeather + "°c ");
    $('#weathertext').before('<img id="weatherIcon" src="img/' + weatherIcon + '.svg">');
    $("body").fadeIn(900);
    getQuote()
}

function getQuote() {
    $.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=",
        dataType: "jsonp",
        success: function(quote) {
            console.log('Quote was successfully retrieved.');
            console.log(quote);
        }
    });
}
