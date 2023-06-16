function converterParaFahrenheit() {
    var celsius = parseFloat(document.getElementById("temp-celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("temp-fahrenheit").value = fahrenheit.toFixed(2);
  }
  
  function converterParaCelsius() {
    var fahrenheit = parseFloat(document.getElementById("temp-fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("temp-celsius").value = celsius.toFixed(2);
  }
  
  function converterParaKelvin() {
    var celsius = parseFloat(document.getElementById("temp-celsius").value);
    var kelvin = celsius + 273.15;
    document.getElementById("temp-kelvin").value = kelvin.toFixed(2);
  }
  