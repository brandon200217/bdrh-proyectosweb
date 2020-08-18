import {DB} from "./bd.js"

const nombreTarea=document.querySelector("#nombreTarea"),
fecha=document.querySelector("#fecha"),
hora=document.querySelector("#hora"),
descripcion=document.querySelector("#descripcion"),
form = document.querySelector("#form");
let materia = document.querySelector("#materia")


form.addEventListener("submit",insertar_datos);

function insertar_datos(e){
    e.preventDefault();
   
    let materiaClase = materia.options[materia.selectedIndex].value;

    const tarea = {
        nombreTarea:nombreTarea.value,
        materiasClases:materiaClase,
        fecha:fecha.value,
        hora:hora.value,
        descripcion:descripcion.value,
      
    };


    let transaccion = DB.transaction(["tareas"],'readwrite');

    let objectStore = transaccion.objectStore('tareas');

    let peticion = objectStore.add(tarea);

    console.log(peticion);
    
    peticion.onsuccess = ()=> {
        form.reset();
    }

    transaccion.oncomplete = ()=> {
        
        //limpiar();
        //mostrarDatos();
    }

    transaccion.onerror= ()=>{
        console.log("no se agregaron los campos");
    }

    /*function limpiar(){

        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }

    }*/
    
}