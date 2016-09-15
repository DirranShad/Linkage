$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault();
    $(this).hide("slow");
  });

$.ajax({
  url: "https://api.forecast.io/forecast/02b0de8d458960b9309f89e3a3b73123/-33.865143,151.2099?units=si",
  dataType: "jsonp",
  success: function (apiresult) {
      console.log('Weather was successfully received.');
      console.log(apiresult);
      $("#loading").css("display", "none");
      $('#credit').before('<p id="weathertext">Sydney: <br> ' + apiresult.currently.temperature + '°c </p>');
      $('')
      $("body").fadeIn(1000);
  }
});
});
