export class apiCovid{

    constructor(){
        this.jsonCovid;
    }

    async datosCovidPais(endpointPais){

        try{

            let covidPais = await fetch(endpointPais);
            this.jsonCovid = await covidPais.json();
            
            return this.jsonCovid;

        
        }
        
        catch(error){
            console.log(endpointPais);
        
        }
    }
    async datosCovidPaises(endpointPaises){

        try{

            let covidPaises = await fetch(endpointPaises);
            this.jsonCovid = await covidPaises.json();
            return this.jsonCovid.Countries;

        }
        
        catch(error){
            console.log(endpointPais);
        }
    }
    async datosCovidGlobal(endpointGlobal){

        try{
           
            let covidGlobal = await fetch(endpointGlobal);
            this.jsonCovid = await covidGlobal.json();
            return this.jsonCovid

        }
        
        catch(error){
            console.log(endpointPais);
        }

    }

}