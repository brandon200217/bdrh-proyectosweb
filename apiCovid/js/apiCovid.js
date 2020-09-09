export class apiCovid{

    constructor(){
        this.jsonCovid;
    }

    async datosCovidPais(endpointPais){

        try{

            let covidPais = await fetch(endpointPais);
            
            if (covidPais.status >= 400 && response.status < 600) {
                throw new Error("Bad response from server");
                
            }else{

                this.jsonCovid = await covidPais.json();
                return this.jsonCovid;
            }
        }
        
        catch(error){
           console.log(error);
        
        }
    }
    async datosCovidPaises(endpointPaises){

        try{

            let covidPaises = await fetch(endpointPaises);
            this.jsonCovid = await covidPaises.json();
            return this.jsonCovid.Countries;

        }
        
        catch(error){
            console.log(endpointPaises);
        }
    }
    async datosCovidGlobal(endpointGlobal){

        try{
           
            let covidGlobal = await fetch(endpointGlobal);
            this.jsonCovid = await covidGlobal.json();
            return this.jsonCovid

        }
        
        catch(error){
            console.log(endpointGlobal);
        }

    }

}