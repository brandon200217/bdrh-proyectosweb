import {UI} from "./ui.js"
import {Api} from "./api.js"

const apiBici = new Api();
const ui = new UI(apiBici);

document.addEventListener("DOMContentLoaded",(e)=>{
    
    ui.mostrarEcoBici()
})

const buscador = document.querySelector("#buscar input");


buscador.addEventListener("input",()=> {
    if(buscador.value.length != ""){
        ui.obtenerSuguerencias(buscador.value);
    }else{
        ui.mostrarEcoBici()
    }

})