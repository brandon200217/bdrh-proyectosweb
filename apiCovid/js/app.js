//Postman:https://documenter.getpostman.com/view/10808728/SzS8rjbc#27454960-ea1c-4b91-a0b6-0468bb4e6712
//ejemplos,Día uno:https://api.covid19api.com/dayone/country/argentina
//ejemplos,Resumen:https://api.covid19api.com/summary
//ejemplos,Total WIP mundial:https://api.covid19api.com/world/total

import {apiPaises} from "./api.js";
import {ui} from "./ui.js";
import {apiCovid} from "./apiCovid.js";

const apiPais = new apiPaises("https://api.printful.com/countries");  
const interfazUsuario = new ui();
const apiCovid19 = new apiCovid();  

let tipoBusqueda = document.querySelector("#busqueda");
let tipoBusquedaValor;


let pais = document.querySelector("#pais");
let paisValor;


document.addEventListener('DOMContentLoaded',paises());
  
function paises(){

    apiPais.paisesMundo().then((valores)=>{
        
        interfazUsuario.selectPaises(valores)
                
    })
    if(pais.value == ""){
        pais.disabled = true;
    }

}



tipoBusqueda.addEventListener("change",(e)=>{
    
    tipoBusquedaValor = tipoBusqueda.options[tipoBusqueda.selectedIndex].value; 

    if(tipoBusquedaValor == "global" || tipoBusquedaValor == "summary"){
        
        pais.disabled = true;       
    }
    else{
        pais.disabled = false;
    }
})



document.querySelector("#bt").addEventListener("click", (e) => {
    e.preventDefault();
    
    tipoBusquedaValor = tipoBusqueda.options[tipoBusqueda.selectedIndex].value; 
    paisValor = pais.options[pais.selectedIndex].value;

    if(pais.disabled == false){    
        if(tipoBusquedaValor != "" && paisValor != ""){
            apiCovid19.datosCovidPais(`https://api.covid19api.com/dayone/country/${paisValor}`).then((covidPais)=>{
                
 
                interfazUsuario.mostrarGraficosPais(covidPais);
            });
        }
    }
    else if(tipoBusquedaValor != ""){

        if(tipoBusquedaValor == "global" ){


            apiCovid19.datosCovidGlobal(`https://api.covid19api.com/world/total`).then((CovidGlobal)=>{

                interfazUsuario.mostrarGraficasGlobal(CovidGlobal);
            });
        }
        
        else if(tipoBusquedaValor == "summary"){

            apiCovid19.datosCovidPaises(`https://api.covid19api.com/summary`).then((covidPaises)=>{

                interfazUsuario.mostrarGraficosPaises(covidPaises);
            
            });
        
        }else{
            console.log("error valor");
        }        
    }

    else{

        interfazUsuario.mensajeError("Todos los campos son obligatiorios","alert bg-purple btn-boopstrap text-center");
    }
    
})

