function convertTime() {
  // Step 1: Read the input time string
  const inputTime = document.getElementById("inputTime").value.trim();

  // Validate the input format
  const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;
  if (!timeRegex.test(inputTime)) {
    alert("Invalid time format. Please enter time in HH:MM AM/PM format.");
    return;
  }

  // Step 2: Extract hour, minute, and AM/PM
  const [time, period] = inputTime.split(" ");
  let [hour, minute] = time.split(":");

  // Step 3: Convert to 24-hour format
  if (period.toUpperCase() === "PM" && hour !== "12") {
    hour = String(Number(hour) + 12);
  } else if (period.toUpperCase() === "AM" && hour === "12") {
    hour = "00";
  }

  // Step 4: Format hour and minute into two-digit strings
  hour = hour.padStart(2, "0");
  minute = minute.padStart(2, "0");

  // Step 5: Return the time in 24-hour format
  const outputTime = `${hour}:${minute}`;
  document.getElementById("outputTime").value = outputTime;
}
