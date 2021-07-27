let a;
let b = 1;
let c;
let date1, date2, date3;
let time;

setInterval(()=>{

a = new Date();
date1 = a.getDate();
c = a.getMonth();
date2 = b + c;
date3 = a.getFullYear();

time = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();

document.getElementById("t").innerHTML = "Current Time " + time;
document.getElementById("d").innerHTML = "Today Date " + date1 +"/"+ date2 +"/"+ date3;

},1000);