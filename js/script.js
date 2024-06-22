let country_code;
let city_name;
//selecciona la clase
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let icon = document.querySelector(".icon");
let loc = document.querySelector(".location");

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
function obtenerEstadoNubosidad(cloudiness) {
  if (cloudiness === 0) {
      return "Despejado";
  } else if (cloudiness > 0 && cloudiness <= 25) {
      return "Mayormente despejado";
  } else if (cloudiness > 25 && cloudiness <= 50) {
      return "Parcialmente nublado";
  } else if (cloudiness > 50 && cloudiness <= 75) {
      return "Mayormente nublado";
  } else if (cloudiness > 75 && cloudiness < 100) {
      return "Nublado";
  } else if (cloudiness === 100) {
      return "Cielo Cubierto";
  } else {
      return "Datos de nubosidad no válidos";
  }
}
function obtenerValorCountry() {
  let valor = document.getElementById("inputCountry").value;
  return valor;
}
function obtenerValorCP() {
  let valor = document.getElementById("inputName").value;
  return valor;
}
document.getElementById("boton").addEventListener("click", () => {
  country_code = obtenerValorCountry();
  city_name = obtenerValorCP();
  const geoloc = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name},${country_code}&limit=1&appid=1402e0888a083fc574f11db2487f8885`;
  fetch(geoloc)
    .then((response) => {
      console.log("respuesta json loc");
      return response.json();
    })
    .then((data) => {
      if (data.length > 0) {
        const { lat, lon } = data[0]; // Accediendo al primer objeto del array
        obtenerClima(lat, lon);
      } else {
        console.error("No se encontró la ubicación.");
      }
      console.log("Esta es al dada de geo loc");
    });
  function obtenerClima(lat, lon) {
    const urlbase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1402e0888a083fc574f11db2487f8885`;
    fetch(urlbase)
      .then((response) => {
        console.log("respuesta json");
        return response.json();
      })
      .then((data) => {
        console.log("Esta es la dada");
        console.log(data);
       // const celsiusTemp = kelvinToCelsius(data.main.temp);
        document.getElementById("response-temp").innerText =
          "Temperatura: " + kelvinToCelsius(data.main.temp).toFixed(2) + "°C";
        document.getElementById("response-temp-sens").innerText =
          "Sensación térmica: " + kelvinToCelsius(data.main.feels_like).toFixed(2) + "°C";
        document.getElementById("humedad").innerText =
          "Humedad: " + data.main.humidity + "%";
        document.getElementById("condicion").innerText =
          "Condición: " + obtenerEstadoNubosidad(data.clouds.all);
        document.getElementById("viento").innerText = "Viento: ";
        document.getElementById("direccion").innerText =
          "Dirección: " + data.winddir_compass;
        document.getElementById("velocidad").innerText =
          "Velocidad: " + data.feelslike_c;
      });
  }
});
