document.querySelectorAll('.form-outline').forEach((formOutline) => {
    new mdb.Input(formOutline).update();
  });

  
const countDownDate = new Date("Nov 05, 2021 00:00:00").getTime();


let myfunc = setInterval(function() {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    
    let { days, hours, minutes, seconds } = newFunction(timeleft);

    
    document.getElementById("days").innerHTML = days + "d "        
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "!!VOTE FOR JAMES BOND!";
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