
let date = document.getElementById("date");
let time = document.getElementById("time");


let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
date.innerHTML = "Today is  " + daylist[day] + "."

let now = today.getUTCMilliseconds();
time.innerHTML ="Current UTC Time in milliseconds: " + now;
