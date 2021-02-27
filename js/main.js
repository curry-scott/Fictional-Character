document.querySelectorAll('.form-outline').forEach((formOutline) => {
    new mdb.Input(formOutline).update();
  });

  //Setting date to countdown to
const countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

//Countdown by seconds to mins to hours to days
let myfunc = setInterval(function() {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    // Setting days, hours, mins and secs to go 
    // 1000 milliseconds, 60 secs, 60 mins, 24 hours 
    let { days, hours, minutes, seconds } = newFunction(timeleft);

    //Displaying days, hours, mins and secs
    document.getElementById("days").innerHTML = days + "d "        
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 

    //Displaying countdown ending message
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "!!HAPPY NEW YEAR!!";
    }
}, 
1000);

function newFunction(timeleft) {
let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
return { days, hours, minutes, seconds };
}