export class apiPaises{

    constructor(endopint){
        this.endopint = endopint;
        this.jsonCovid;
        this.jsonResultado; 
    }

    async paisesMundo(){
        let listaPaises = await fetch(this.endopint);

        let jsonPaises = await listaPaises.json();
        jsonPaises = jsonPaises.result;
        return jsonPaises;
    }

}