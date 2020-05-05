var startDate = document.getElementById("startDate");
var addDays = document.getElementById("addDays");
var result = document.querySelector(".result");
var btn = document.querySelector("button");

function dayAdder() {                                           //https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript
    var startUnixTs = startDate.valueAsNumber;                  //https://hu.wikipedia.org/wiki/Unix-id%C5%91
    var addUnixTsDays = addDays.value * 86400000;               
    var resultUnixTs = startUnixTs + addUnixTsDays;
    var dateObject = new Date(resultUnixTs);
    var humanDateFormat = dateObject.toLocaleDateString();
    return humanDateFormat;
}

function resultDisplayClick() {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(dayAdder()));
    result.appendChild(p);
}

function resultDisplayEnter(event) {
    if (event.keyCode === 13) {
        resultDisplayClick();
    }
}


btn.addEventListener("click", resultDisplayClick);
addDays.addEventListener("keypress", resultDisplayEnter)