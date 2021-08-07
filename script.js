// Log-in time on my website
let d=new Date(); 
let weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"); 
let monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); 
document.write(weekday[d.getDay()] + " "); 
document.write(d.getDate() + ", "); 
document.write(monthname[d.getMonth()] + " "); 
document.write(d.getFullYear() + ", ");
document.write(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());