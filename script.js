// Function to convert CAD to USD
function convertToUSD() {
    var cadInput = document.getElementById("cadInput").value;
    var cadToUsdRate = 1.31; // Example conversion rate (CAD to USD)
    
    // Check if input is valid
    if (cadInput && !isNaN(cadInput)) {
      var result = cadInput / cadToUsdRate;
      document.getElementById("usdResult").innerText = "USD: " + result.toFixed(3);
    } else {
      document.getElementById("usdResult").innerText = "Please enter a valid number";
    }
  }
  
  // Function to convert USD to CAD
  function convertToCAD() {
    var usdInput = document.getElementById("usdInput").value;
    var usdToCadRate = 0.74; // Example conversion rate (USD to CAD)
    
    // Check if input is valid
    if (usdInput && !isNaN(usdInput)) {
      var result = usdInput * usdToCadRate;
      document.getElementById("cadResult").innerText = "CAD: " + result.toFixed(3);
    } else {
      document.getElementById("cadResult").innerText = "Please enter a valid number";
    }
  }
  