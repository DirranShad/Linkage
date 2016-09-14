$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault();
    $(this).hide("slow");
  });

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=784267ec0e780a59fcdfefbdde76a894&units=metric", function(result){
    console.log(result);
    });

});
