$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault();
    $(this).hide("slow");
  });

$.getJSON("https://api.forecast.io/forecast/02b0de8d458960b9309f89e3a3b73123/-33.865143,151.2099?units=si", function(apiresult){
    console.log(apiresult);
    $("#loading").css("display", "none");
    $('#weather').html('<p id="weathertext">Sydney: ' + apiresult.currently.temperature + '°c </p>');
    });

});
