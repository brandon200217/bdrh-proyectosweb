export class api{
    
    static instancia;
    
    constructor(){
        if(!!api.instancia){    
            return api.instancia;
        }
        api.instancia=this;

    }

    async conectar_api(longitud,latitud,excludeValore){

        let endpoint=`https://api.darksky.net/forecast/c3d7a0e3d7e21fd9bbca5d63e0a298e4/${latitud},${longitud}?exclude=${excludeValore}`;
        console.log(endpoint);
        let datos_clima = await fetch(endpoint);
        
        let datosJson = await datos_clima.json();
        

        const {timezone,hourly} = datosJson;
        
        return {
            time:timezone,
            hora:hourly
        }                 
    }
}

//mañana hacemos el paginadors

/*hourly.data[0].time," ",
    hourly.data[1].humidity," ",
    hourly.data[0].apparentTemperature," ",
    hourly.data[0].icon," ",
    hourly.data[0].precipProbability," ",
    hourly.data[0].windBearing," ",
    hourly.data[0].windSpeed
*/ 









