function startTime() {
    var today = new Date();  //Creates a Date object which is preloaded with utility functions
    var currentHours = today.getHours();
    var currentMinutes = today.getMinutes();
    var currentSeconds = today.getSeconds();
    var meridiem = meridiemCheck(currentHours);

    currentHours = midnightShowsTwelve(currentHours);    
    currentHours = leadingZeroCheck(currentHours);
    currentMinutes = leadingZeroCheck(currentMinutes);
    currentSeconds = leadingZeroCheck(currentSeconds);
    
    formatClock(currentHours, currentMinutes, currentSeconds, meridiem);

    //This makes our clock tick, running our startTime function every 1000ms, or 1s
    window.setInterval(startTime, 1000); 
}

// Hours under 12 return AM, 12 and higher return PM
function meridiemCheck(i) {
  if (i < 12) {return "AM"}  
    else {return "PM"} 
}

function midnightShowsTwelve(i){
  if(i == 0) {i=12}
  return i;
}

// Pad the hours, minutes and seconds with leading zeros, if required
function leadingZeroCheck(i) {
    if (i < 10) {i = "0" + i}  
    return i;
}

// Map the values to appear 00:00:00 AM format, in the "clock" <div>
function formatClock(hour, min, sec, amPM){
  document.getElementById('clock').innerHTML =  
    (hour + ":" + min + ":" + sec + " " + amPM);  
    
}