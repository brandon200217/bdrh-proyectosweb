import {UI} from "./ui.js"
import {Api} from "./api.js"

const apiBici = new Api();

const ui = new UI(apiBici);


document.addEventListener("DOMContentLoaded",(e)=>{
    
    ui.mostrarEcoBici()
})