function startMyDigitalClock() {
    var today = new Date();  //Creates a Date object which is preloaded with utility methods
    var currentHours = today.getHours();
    var currentMinutes = today.getMinutes();
    var currentSeconds = today.getSeconds();
    var meridiem = meridiemCheck(currentHours);

    currentHours = convertToTwelveHourClock(currentHours);    
    currentHours = leadingZeroCheck(currentHours);
    currentMinutes = leadingZeroCheck(currentMinutes);
    currentSeconds = leadingZeroCheck(currentSeconds);
    
    displayClock(currentHours, currentMinutes, currentSeconds, meridiem);

    //This makes our clock tick, running our startMyDigitalClock function every 1000ms, or 1s
    window.setInterval(startMyDigitalClock, 1000); 
}

// Hours under 12 return AM, 12 and higher return PM
function meridiemCheck(i) {
  if (i < 12) { return "AM"; }  
    else { return "PM"; } 
}

function convertToTwelveHourClock(i){
  if (i == 0) { i=12; }
  else if (i > 12) { i-=12;}
  
  return i;
}

// Pad the hours, minutes and seconds with leading zeros, if required
function leadingZeroCheck(i) {
    if (i < 10) { i = "0" + i; }  
    
    return i;
}

// Map the values to appear 00:00:00 AM format, in the "clock" <div>
function displayClock(hour, min, sec, amPM){
  var clockDiv = document.getElementById('clock');
  clockDiv.innerHTML = (hour + ":" + min + ":" + sec + " " + amPM);  
    
}