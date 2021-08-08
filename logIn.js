// Log-in time on website

let d = new Date(); 
let weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"); 
let monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); 
document.write(weekday[d.getDay()] + " "); 
document.write(d.getDate() + ", "); 
document.write(monthname[d.getMonth()] + " "); 
document.write(d.getFullYear() + ", ");
document.write(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

// Salutation

let hourNow = d.getHours();
let greeting;
if (hourNow > 18) {
greeting = "Good evening!";
} 
else if (hourNow > 12) {
greeting = "Good afternoon!";
} 
else if (hourNow > 0) {
greeting = "Good morning!";
} 
else {
greeting = "Welcome!";
}

document.write("<p>" + greeting + "</p>");