const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");

const toggleButton = document.getElementById("toggle_button");

const toggleDarkMode = () => {
  var element = document.getElementById("container");
  element.classList.toggle("dark-mode");
};

toggleButton.addEventListener("click", toggleDarkMode);

const refreshSecondHand = () => {
  if (secondHand) {
    const time = new Date();
    let seconds = time.getSeconds();
    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  }
};

const refreshMinuteHand = () => {
  if (minuteHand) {
    const time = new Date();
    let minutes = time.getMinutes();
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  }
};

const refreshHourHand = () => {
  if (hourHand) {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    hourHand.style.transform = `rotate(${(hours % 12) * 30 + minutes / 2}deg)`;
  }
};

const setTime = () => {
  refreshSecondHand();
  refreshMinuteHand();
  refreshHourHand();
};

setInterval(setTime, 1000);
