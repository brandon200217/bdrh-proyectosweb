export class apiPaises{

    constructor(endopint){
        this.endopint = endopint;

    }

    async paisesMundo(){
        console.log("a");
        let listaPaises = await fetch(this.endopint);

        let jsonPaises = await listaPaises.json();
        jsonPaises = jsonPaises.result;
        return jsonPaises;
    }
}