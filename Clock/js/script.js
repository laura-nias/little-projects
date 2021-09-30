function showDate(){
    var date = new Date();
    var d = date.getDay();
    var mon = date.getMonth();
    var y = date.getFullYear();

    d = d < 10 ? "0" + d : d;
    mon = mon < 10 ? "0" + mon : mon;

    var test = d + "/" + mon + "/" + y;
    
    document.getElementById("DateDisplay").innerText = test;

    document.getElementById("DateDisplay").textContent = test;
}

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("ClockDisplay").innerText = time;

    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showDate();
showTime();