let country_code;
let city_name;
//selecciona la clase
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let icon = document.querySelector(".icon");
let loc = document.querySelector(".location");

      
        function obtenerValorCountry() {
            
            let valor = document.getElementById("inputCountry").value;
            return valor;
            }
        function obtenerValorCP() {
            
            let valor = document.getElementById("inputCP").value;
            return valor;
            }
        document.getElementById("boton").addEventListener("click", () => {
                //country = obtenerValorCountry();
                city_name = obtenerValorCP();
                const geoloc = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},ar&limit=1&appid=1402e0888a083fc574f11db2487f8885`
                fetch(geoloc)
                .then((response) => {
                    console.log("respuesta json loc");
                return response.json();
                
                })
                .then((data) => {
                    console.log("Esta es al dada de geo loc");
                    console.log(data.lat);
                    console.log(data.lon);

                     const urlbase = `http://api.openweathermap.org/data/2.5/weather?lat=${data_geo.lat}&lon=${data_geo.lon}&appid=1402e0888a083fc574f11db2487f8885`;
               
                fetch(urlbase)
                .then((response) => {
                    console.log("respuesta json");
                return response.json();
                
                })
                .then((data) => {
                    console.log("Esta es al dada");
                    console.log(data);
                    document.getElementById("response-temp").innerText = "Temperatura: " + data.temp_c + "°C";
                    document.getElementById("response-temp-sens").innerText = "Sensación térmica: " + data.feelslike_c + "°C";
                    document.getElementById("humedad").innerText = "Humedad: " + data.humid_pct + "%";
                    document.getElementById("condicion").innerText = "Condición: " + data.wx_desc;
                    document.getElementById("viento").innerText = "Viento: ";
                    document.getElementById("direccion").innerText = "Dirección: " + data.winddir_compass;
                    document.getElementById("velocidad").innerText = "Velocidad: " + data.feelslike_c;
                })
                })

                
            }); 
    

   