//Postman:https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712
//ejemplos,Día uno:https://api.covid19api.com/dayone/country/argentina
//ejemplos,Resumen:https://api.covid19api.com/summary
//ejemplos,Total WIP mundial:https://api.covid19api.com/world/total

import {apiPaises} from "./api.js";
import {ui} from "./ui.js";

const apiPais = new apiPaises("https://api.printful.com/countries");  
const interfazUsuario = new ui();

document.addEventListener('DOMContentLoaded',paises());
    
function paises(){

    let tipoBusqueda = document.querySelector("#busqueda");
    let tipoBusquedaValor = tipoBusqueda.options[tipoBusqueda.selectedIndex].value;

    apiPais.paisesMundo().then((valores)=>{
                    
        interfazUsuario.selectPaises(valores)
                
    })
}


let elijeOpcion = document.querySelector("#busqueda");
elijeOpcion.addEventListener("change",(e)=>{
    
    let valor = elijeOpcion.options[elijeOpcion.selectedIndex].value; 

    if(valor == "global" || valor == "summary"){
        document.querySelector("#pais").disabled = true;
    }
    else{
        document.querySelector("#pais").disabled = false;
    }

})



document.querySelector("#bt").addEventListener("click", (e) => {
    e.preventDefault();
    

})



/*let ctx= document.querySelector("#myChart").getContext("2d");
let myChart= new Chart(ctx,{

    type:"bar",
    data:{   
        labels:['col1','col2','col3'],
        datasets:[{
            label:'datos covid',
            data:[244,12,214]
        }]
    }    
});*/