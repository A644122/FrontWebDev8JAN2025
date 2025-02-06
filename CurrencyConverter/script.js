// script.js
const inrInput = document.getElementById("inrInput");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// Fetch the latest exchange rate from an API
async function fetchExchangeRate() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/INR"
    );
    const data = await response.json();
    return data.rates.USD; // Get the USD rate
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return null;
  }
}

// Convert INR to USD
async function convertCurrency() {
  const inrAmount = parseFloat(inrInput.value);
  if (isNaN(inrAmount) || inrAmount < 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const exchangeRate = await fetchExchangeRate();
  if (exchangeRate) {
    const usdAmount = (inrAmount * exchangeRate).toFixed(2);
    resultDiv.textContent = `${inrAmount} INR = ${usdAmount} USD`;
  } else {
    resultDiv.textContent =
      "Failed to fetch exchange rate. Please try again later.";
  }
}

// Event Listener for Convert Button
convertBtn.addEventListener("click", convertCurrency);

// Optional: Allow pressing "Enter" to convert
inrInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    convertCurrency();
  }
});
