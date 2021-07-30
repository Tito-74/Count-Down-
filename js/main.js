const daysE1 = document.getElementById("days")
const hoursE1 = document.getElementById("hours")
const minsE1 = document.getElementById("minutes")
const secondsE1 = document.getElementById("seconds")


const  newYears = '1 jan 2022';

function countdown(){
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds=(newYearDate-currentDate)/1000;
  const days = Math.floor (totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days,hours,minutes,seconds);
   daysE1.innerHTML= days;
   hoursE1.innerHTML= formaTime(hours);
   minsE1.innerHTML= formaTime(minutes);
   secondsE1.innerHTML= formaTime(seconds);

};
function formaTime(time){
  return time < 10 ? `0${time}` : time;
}
countdown()
setInterval(countdown,1000)