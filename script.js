const targetDate = "12 may 2021";

function setTheTime() {
  const toDate = new Date(targetDate);
  const currentDate = new Date();
  const differenceBetweenDate = toDate - currentDate;

  const miliTosec = Math.floor(differenceBetweenDate / 1000);
  const days = Math.floor(miliTosec / 3600 / 24);
  const hours = Math.floor(miliTosec / 3600) % 24;
  const minutes = Math.floor(miliTosec / 60) % 60;
  const seconds = Math.floor(miliTosec) % 60;

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}

setInterval(setTheTime, 1000);
