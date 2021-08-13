// Log-in time on website

let logInTime = new Date(); 
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"]; 
let monthname = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; 
document.write(weekday[logInTime.getDay()] + " "); 
document.write(logInTime.getDate() + ", "); 
document.write(monthname[logInTime.getMonth()] + " "); 
document.write(logInTime.getFullYear() + ", ");
document.write(logInTime.getHours() + ":" + logInTime.getMinutes() + ":" + logInTime.getSeconds());

// Appropriate Salutation at time of visit

let hourNow = logInTime.getHours();
let greeting;
if (hourNow > 18) {
greeting = "Good evening!";
} 
else if (hourNow > 12) {
greeting = "Good afternoon!";
} 
else if (hourNow > 5) {
greeting = "Good morning!";
} 
else {
greeting = "Welcome!";
}

document.write("<p>" + greeting + "</p>");