export let DB;
document.addEventListener("DOMContentLoaded", () => {

    let crearDB = window.indexedDB.open("tareas",1);
    
    crearDB.onerror = ()=> {
        
        console.log("hubo un error");
    
    }

    crearDB.onsuccess=()=>{
      
        DB = crearDB.result;

    }


    crearDB.onupgradeneeded = (e) => {
        let obj = e.target.result;
    
        let objectStore = obj.createObjectStore('tareas',{ keyPath:'key', autoIncrement : true});
        
        //tres parametros:nombre,keypath y opciones;
        objectStore.createIndex('nombreTarea','nombreTarea',{unique: false });
        objectStore.createIndex('materia','materia',{unique: false });
        objectStore.createIndex('fecha','fecha',{unique: false });
        objectStore.createIndex('hora','hora',{unique: false });
        objectStore.createIndex('descripcion','descripcion',{unique: false });
    } 
})    



