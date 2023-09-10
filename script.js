 // JavaScript to update dynamic content
 document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getUTCDay();
    const currentDay = daysOfWeek[currentDayIndex];

    // Get the current UTC time
    const uTCTime = currentDate;
    //   const uTCTime = currentDate.toISOString();
    const currentUTCTime = currentDate.getTime();

    // Update the elements with their respective data-testid attributes
    document.querySelector(
      '[data-testid="currentDayOfTheWeek"]'
    ).textContent = `Current Day: ${currentDay}`;
    document.querySelector(
      '[data-testid="currentUTCTime"]'
    ).textContent = `Current UTC Time in Milliseconds: ${currentUTCTime}`;
  });

  function updateClock() {
    const currentTime = new Date();
    const timeElement =  document.querySelector(
      '[data-testid="currentTime"]')
    
    // Format the time as HH:MM:SS
    const hours = currentTime.getUTCHours().toString().padStart(2, '0');
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
    
    timeElement.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();