import {paginador} from "./paginador.js"

const resultado=document.querySelector("#resultado");
const paginado=document.querySelector("#paginador");

export class Interfaz_usuario{
    constructor(){}
    
    mensajeError(mensaje,clase){
        
        const div = document.createElement("div");
        const divMensaje = document.querySelector(".mensajes");
        const divRespuesta = document.querySelector(".respuesta");

        div.className = clase;
        div.appendChild(document.createTextNode(mensaje));
        divMensaje.appendChild(div);
        document.querySelector("#btn").disabled =true;
        setTimeout( () =>{
            document.querySelector("#btn").disabled =false;
            divMensaje.removeChild(divMensaje.children[0])
        },3000)
    }

    mostrarDatosApi(datosClima){

        this.BorrarDatos();

        let div=document.createElement("div");
        let horas=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];

        try{

            let hora = datosClima.hora.data;
            let pais = datosClima.time;
            
            let registroTotal = hora.length;    
            let iterador = 1;

            let tabla = `<table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">registro</th>
                        <th scope="col">Pais</th>
                        <th scope="col">time</th>
                        <th scope="col">humidity</th>
                        <th scope="col">apparentTemperature</th>
                        <th scope="col">precipProbability</th>
                        <th scope="col">windSpeed</th>
                        <th scope="col">icon</th>
                    </tr>
                </thead> `
                
            /*----------------------------------------------------------------------
            Paginador
            const paginar = new paginador(1,registroTotal,"");
            let filtro=paginar.paginacion(5,paginado);
            const result = hora.filter(datos => hora.splice(filtro[0],filtro[1]));
            ------------------------------------------------------------------------- */
            //const result = hora.filter(datos => hora.splice(0,5));
            let splice=document.querySelector("#selected"); 
            let spliceVal=splice.options[splice.selectedIndex].value;
            let valorIndividuales = spliceVal.split("-")
            let registros = hora.splice(parseInt(valorIndividuales[0]),parseInt(valorIndividuales[1]));
            
            registros.forEach(dato => {
                
                let fechaActual = new Date(dato.time*1000);
                let fechaFormateada = horas[fechaActual.getDay()] +", " + fechaActual.getHours();
                
                let horaRegistro = fechaFormateada.split(" ")[1];
                let icono = this.buscar_icono(dato.icon);

                
                tabla +=
                `       
                    <tbody>
                        <tr>
                            <th scope="row">${iterador++}</th>
                            <td>${pais}</td>
                            <td>${fechaFormateada} h ${horaRegistro <= 12 ? " a.m" : " p.m"}</td>
                            <td>${dato.humidity}</td>
                            <td>${dato.precipProbability}</td>
                            <td>${dato.apparentTemperature}</td>
                            <td>${dato.windSpeed}</td>
                            <td>${dato.icon}${icono}</td>
                        </tr>
                    </tbody>
                    
                `;

            });
           
            tabla += `</table>`

            div.innerHTML = tabla;
            resultado.appendChild(div);
        
        }catch(error){
            
            throw(error);
        }         
    }

    buscar_icono(icon){
        switch (icon) {
            case "cloudy":
                return "<img src='img/cloudy.png' class='img-fluid' Width='30px'/>"
                break;
            
            case "partly-cloudy-day":
                return "<img src='img/sol_nublado.jpg' class='img-fluid' Width='30px'/>"
                break;
            
            case "partly-cloudy-night":
                return "<img src='img/partly-cloudy-night.jpg' class='img-fluid' Width='30px'/>"  
                break;
            
            case "clear-night":
                return "<img src='img/night.jpg' class='img-fluid' Width='30px'/>" 
                break;
            
            case "wind":
                return "<img src='img/descarga.png' class='img-fluid' Width='30px'/>" 
                break;    
            
            default:
                return "<img src='img/snow.jpg' class='img-fluid' Width='30px'/>" 
                break
        }
    }

    BorrarDatos(){
        
        while(resultado.firstChild){

            resultado.removeChild(resultado.firstChild);
        
        }
    }
}