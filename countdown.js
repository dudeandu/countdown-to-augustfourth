function getTimeUntilNewYear() {
  // Get the current date and time
  const now = new Date();

  // Get the next New Year's Eve
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  const newYearDate = new Date(nextYear, 0, 1);

  // Calculate the time difference in milliseconds
  const timeRemaining = newYearDate - now;

  // Convert the time difference to days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Return the time remaining as an object
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function updateCountdown() {
  // Get the countdown element from the HTML
  const countdownElement = document.getElementById('countdown');

  // Get the time remaining until New Year
  const timeLeft = getTimeUntilNewYear();

  // Display the countdown in the HTML element
  countdownElement.innerHTML = `
    <p>${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds</p>
  `;
}

// Update the countdown immediately
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
