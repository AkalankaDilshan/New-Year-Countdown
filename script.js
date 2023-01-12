//declear variables
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

//create constant

const newYears = "1 jan 2024";

//creat funtion

//js wla date different eka denne mili second ganakat
//ekai 1000 bedanne

function countdown()
{
  const newYearDate = new Date(newYears);
  const currentDate  = new Date();

  const totalseconds = Math.floor((newYearDate - currentDate)/1000);

  const days = Math.floor(totalseconds /(3600 * 24));

  const hours = Math.floor(totalseconds/3600) % 24;

  const minutes = Math.floor(totalseconds/60) % 60;

  const second = Math.floor(totalseconds) % 60;

 

  daysEl.innerHTML = days;
  minEl.innerHTML = minutes;
  hoursEl.innerHTML = hours;
  secEl.innerHTML = second;
  console.log(days,hours,minutes,second);
}


//initail call funtion 
countdown();
setInterval(countdown,1000);
