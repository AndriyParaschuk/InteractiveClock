
var date = new Date();
var sec = date.getSeconds();
var min = date.getMinutes();
var hour = date.getHours();
var hourAngle = document.getElementsByClassName("hour")[0];
var minAngle = document.getElementsByClassName("min")[0];
var secAngle = document.getElementsByClassName("sec")[0];
var currentTime = document.getElementsByClassName("currentTime")[0];
var currentDay = document.getElementsByClassName("currentDay")[0];
var dayToNewYear = document.getElementsByClassName("dayToNewYear")[0];

(function moveTime() {
    getDayOfWeek();
    getDaysToNewYear();
    moveSec();
    moveMin();
    moveHour();
    setInterval(function () {
        setTime();
    }, 1000);
}());

function moveSec() {
    var turnSec = sec*6;
    secAngle.style.transform = "rotate(" + turnSec + "deg)";
    secAngle.style.webkitTransform = "rotate(" + turnSec + "deg)";
    var eachSec = setInterval(function () {
        turnSec += 6;
        secAngle.style.transform = "rotate(" + turnSec + "deg)";
        secAngle.style.webkitTransform = "rotate(" + turnSec + "deg)";
    }, 1000);
}

function moveMin() {
    var turnMin = min*6;
    minAngle.style.transform = "rotate(" + turnMin + "deg)";
    minAngle.style.webkitTransform = "rotate(" + turnMin + "deg)";
    setTimeout(function () {
        //turnMin += 6;
        minAngle.style.transform = "rotate(" + turnMin + "deg)";
        minAngle.style.webkitTransform = "rotate(" + turnMin + "deg)";
        var eachMin = setInterval(function () {
            turnMin += 1;
            minAngle.style.transform = "rotate(" + turnMin + "deg)";
            minAngle.style.webkitTransform = "rotate(" + turnMin + "deg)";
        }, 10000);
    }, (60 - sec) * 1000);
}

function moveHour() {
    if(hour > 11){
        hour -= 12;
    }
    var turnHour = hour*30 + min*0.5;
    hourAngle.style.transform = "rotate(" + turnHour + "deg)";
    hourAngle.style.webkitTransform = "rotate(" + turnHour + "deg)";
    setTimeout(function () {
        //turnHour += 30;
        hourAngle.style.transform = "rotate(" + turnHour + "deg)";
        hourAngle.style.webkitTransform = "rotate(" + turnHour + "deg)";
        var eachHour = setInterval(function () {
            turnHour += 0.5;
            hourAngle.style.transform = "rotate(" + turnHour + "deg)";
            hourAngle.style.webkitTransform = "rotate(" + turnHour + "deg)";
        }, 60000);
    }, (60 - sec) * 1000);
}

function setTime() {
    var currentDate = new Date();
    var currentSec = (currentDate.getSeconds() > 9) ? currentDate.getSeconds() : "0" + currentDate.getSeconds();
    var currentMin = (currentDate.getMinutes() > 9) ? currentDate.getMinutes() : "0" + currentDate.getMinutes();
    var currentHour = (currentDate.getHours() > 9) ? currentDate.getHours() : "0" + currentDate.getHours();
    currentTime.innerHTML = currentHour + ":" + currentMin + ":" + currentSec;
}

function getDayOfWeek() {
    var currentDate = new Date();
    currentDay.innerHTML = "Сьогодні " + dayToString(currentDate.getDay()) + ", " + currentDate.getDate()
        + " " + monthToString(currentDate.getMonth());
}

function getDaysToNewYear() {
    var currentDate = new Date();
    dayToNewYear.innerHTML = "До нового року залишилося " + getDayDelta(currentDate) + " " + DoSome(currentDate);
}

function getDayDelta(todayDate){
    var nextYear = new Date();
    var delta;
    nextYear.setFullYear(todayDate.getFullYear()+ 1);
    nextYear.setDate(1);
    nextYear.setMonth(0);

    delta = nextYear - todayDate;

    return Math.round(delta / 1000 / 60 / 60 / 24);
}

function DoSome(dayOfWeek) {
    var day = getDayDelta(dayOfWeek);
    switch(day % 10) {
        case 1:
            return "день";
        case 2,3,4:
            return "дні";
        default:
            return "днів";
    }
}

function dayToString(dayOfWeek) {
    switch(dayOfWeek)
    {
        case 0:
            return "неділя";
        case 1:
            return "понеділок";
        case 2:
            return "вівторок";
        case 3:
            return "середа";
        case 4:
            return "четвер";
        case 5:
            return "п'ятниця";
        case 6:
            return "субота";
    }
}

    function monthToString(dayOfWeek) {
    switch(dayOfWeek)
    {
        case 0:
            return "січня";
        case 1:
            return "лютого";
        case 2:
            return "березня";
        case 3:
            return "квітня";
        case 4:
            return "травня";
        case 5:
            return "червня";
        case 6:
            return "липня";
        case 7:
            return "серпня";
        case 8:
            return "вересня";
        case 9:
            return "жовтня";
        case 10:
            return "листопада";
        case 11:
            return "грудня";
    }
}
