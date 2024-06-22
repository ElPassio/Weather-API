let country;
let pCode;
//selecciona la clase
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let icon = document.querySelector(".icon");
let loc = document.querySelector(".location");
        //country = prompt("Ingrese un Pais(abreviacion, 2 letras)");
        //pCode = prompt("Ingrese codigo postal");
      
        function obtenerValorCountry() {
            
            let valor = document.getElementById("inputCountry").value;
            return valor;
            }
        function obtenerValorCP() {
            
            let valor = document.getElementById("inputCP").value;
            return valor;
            }
        document.getElementById("boton").addEventListener("click", () => {
                country = obtenerValorCountry();
                pCode = obtenerValorCP();
                const urlbase = `https://api.weatherunlocked.com/api/current/${country}.${pCode}?app_id=7be4b099&app_key=5a8663ba90b28b82f441584f89d1690a`;
                
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
            }); 
    

   