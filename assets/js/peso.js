function convertWeight() {
    var inputWeight = parseFloat(document.getElementById("inputWeight").value);
    var outputPounds = document.getElementById("outputPounds");
    var outputOunces = document.getElementById("outputOunces");
  
    var pounds = inputWeight * 2.20462;
    var ounces = inputWeight * 35.274;
  
    outputPounds.value = pounds.toFixed(2);
    outputOunces.value = ounces.toFixed(2);
  }
  