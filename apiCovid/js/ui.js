let select = document.querySelector("#pais");



export class ui{
    constructor(){}

    selectPaises(jsonPaises){
        //console.log(jsonPaises);
                
        for(const [key,value] of Object.entries(jsonPaises)){
            let option = document.createElement("option");     
            option.value = value.name
           

            option.appendChild(document.createTextNode(value.name))
            select.appendChild(option);
        }

        

    }


}