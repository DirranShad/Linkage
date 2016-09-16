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
  success: function (apiresult) {
      console.log('Weather was successfully retrieved.');
      console.log(apiresult);
      weatherIcon = apiresult.currently.icon
      currentWeather = apiresult.currently.temperature
      iconCheck()
   }
});

function iconCheck() {
  if (weatherIcon == "clear-night"){
    weatherIcon = "clear-day";
    printWeather()
  }
  else if (weatherIcon == "partly-cloudy-night"){
    weatherIcon = "partly-cloudy"
    printWeather()
  }
  else {
    printWeather()
  }
}
function printWeather(){
  $('#credit').before('<p id="weathertext">Sydney: <br> ' + currentWeather + '°c </p>');
  $('#weathertext').before('<img id="weatherIcon" src="img/' + weatherIcon + '.svg">');
  $("body").fadeIn(1000);
}



});

/* A Random Quote Api
$.ajax( {
     url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
     success: function(data) {
       var post = data.shift(); // The data is an array of posts. Grab the first one.
       $('#quote-title').text(post.title);
       $('#quote-content').html(post.content);

       // If the Source is available, use it. Otherwise hide it.
       if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
         $('#quote-source').html('Source:' + post.custom_meta.Source);
       } else {
         $('#quote-source').text('');
       }
     },
     cache: false
   });
 });
*/
