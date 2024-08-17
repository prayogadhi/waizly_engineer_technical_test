function validateTimeFormat(time) {
  var timeFormat = /^(0[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9])\s(AM|PM)$/;
  return timeFormat.test(time);
}

var time = "07:05:45 PM";
if (validateTimeFormat(time)) {
  convertTime(time);
} else {
  console.log("The time format is invalid.");
}

function convertTime(time) {
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+):/)[1]);
  var seconds = Number(time.match(/:(\d+)\s/)[1]);
  var format = time.match(/\s(.*)$/)[1];

  if (format == "PM" && hours < 12) hours = hours + 12;
  if (format == "AM" && hours == 12) hours = hours - 12;

  var sHours = hours.toString();
  var sMinutes = minutes.toString();
  var sSeconds = seconds.toString();

  if (hours < 10) sHours = "0" + sHours;
  if (minutes < 10) sMinutes = "0" + sMinutes;
  console.log(sHours + ":" + sMinutes + ":" + sSeconds);
}
