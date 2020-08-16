import {api} from "./fetch.js"
import {Interfaz_usuario} from "./ui.js"
const proxy = "https://cors-anywhere.herokuapp.com/";
const ui= new Interfaz_usuario();


document.forms[0].addEventListener("submit",(e) =>{
    e.preventDefault();
    
    let longitud=document.querySelector("#longitud").value;
    let latitud=document.querySelector("#latitud").value;
    
    let exclude = document.querySelector("#exclude");
    let excludeValore=exclude.options[exclude.selectedIndex].value;

    if(longitud != "" && latitud != "" && excludeValore != ""){
        
        //console.log(longitud,latitud,excludeValore);
        
        const darksky = new api();
        darksky.conectar_api(longitud,latitud,excludeValore).then( datosClima =>{
            ui.mostrarDatosApi(datosClima);
        })
    
    }else{
        ui.mensajeError("Todos los campos son obligatiorios","alert bg-danger text-center");
    }

});

