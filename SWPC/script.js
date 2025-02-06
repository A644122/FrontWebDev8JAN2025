function calculateSWP() {
  // Get input values
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const period = parseFloat(document.getElementById("period").value);

  // Validate inputs
  if (isNaN(principal) || isNaN(rate) || isNaN(period)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  // Convert annual rate to monthly rate
  const monthlyRate = rate / 100 / 12;

  // Convert period to months
  const months = period * 12;

  // Calculate monthly withdrawal amount
  const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
  const denominator = Math.pow(1 + monthlyRate, months) - 1;
  const withdrawalAmount = numerator / denominator;

  // Display result
  document.getElementById(
    "result"
  ).innerText = `Monthly Withdrawal: ₹${withdrawalAmount.toFixed(2)}`;
}
