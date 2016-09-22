var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var secondcount = 0

function GetClock() {
    var d = new Date();
    var nday = d.getDay(),
        nmonth = d.getMonth(),
        ndate = d.getDate();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        ap;
    secondcount = secondcount + 1;
    //if (secondcount == 3) {$("body").fadeIn(900);}
    if (nhour == 0) {
        ap = " AM";
        nhour = 12;
    } else if (nhour < 12) {
        ap = " AM";
    } else if (nhour == 12) {
        ap = " PM";
    } else if (nhour > 12) {
        ap = " PM";
        nhour -= 12;
    }

    if (nmin <= 9) {
        nmin = "0" + nmin;
    }
    getDayTime();
    $('#clockbox').html("" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nhour + ":" + nmin + ap + "");
}

window.onload = function() {
    GetClock();
    setInterval(GetClock, 1000);
}

function getDayTime() {
    var sysdate = new Date();
    var syshour = sysdate.getHours(),
        ap;
    if (syshour < 12) {
        $('#daytime').html(" Morning,");
    } else if (syshour < 18) {
        $('#daytime').html(" Afternoon,");
    } else {
        $('#daytime').html(" Evening,");
    }
}
