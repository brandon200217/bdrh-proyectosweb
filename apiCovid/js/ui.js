let select = document.querySelector("#pais");
let ctx= document.querySelector("#myChart").getContext("2d");


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

    /*-----------------------------------------------------
    mostrarGraficasGlobal
    ------------------------------------------------------*/
    mostrarGraficasGlobal(datosCovid){
        if (window.grafica) {
            window.grafica.clear();
            window.grafica.destroy();
        
        }

        window.grafica = new Chart(ctx,{
            type:"bar",
            data:{   
                labels:['Contagiados','Total de Muertes','Total de Recuperados'],
                datasets:[{
                    label:'datos Globales covid',    
                    
                    backgroundColor:"#600a63",
                    hoverBackgroundColor:"#600a63",
                    hoverBackgroundColor: [
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)',
                    ],
                    hoverBorderColor:[
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)'
                    ],    
                    hoverBorderWidth:4,
                    data:[datosCovid.TotalConfirmed,datosCovid.TotalDeaths,datosCovid.TotalRecovered]
                }]
            }    
        });

    }
    /*-----------------------------------------------------
    mostrarGraficosPais
    ------------------------------------------------------*/
    mostrarGraficosPais(datosCovid){
        
        if (window.grafica) {
            window.grafica.clear();
            window.grafica.destroy();
        }
        //Recovered,Active
        let datosCovidSemana=datosCovid.splice(-7);
        
        let dataUno = {
            label: "muertes",
            backgroundColor:"#820d86",
            borderColor:"rgb(124, 27, 100)",
            data:[datosCovidSemana[0].Deaths,datosCovidSemana[1].Deaths,datosCovidSemana[2].Deaths,datosCovidSemana[3].Deaths,datosCovidSemana[4].Deaths,datosCovidSemana[5].Deaths,datosCovidSemana[6].Deaths],
            lineTension: 0,
            fill: false
        };
       
        let dataSegundo = {
            label: "Confirmados",
            backgroundColor:"#604cac",
            data:[datosCovidSemana[0].Confirmed,datosCovidSemana[1].Confirmed,datosCovidSemana[2].Confirmed,datosCovidSemana[3].Confirmed,datosCovidSemana[4].Confirmed,datosCovidSemana[5].Confirmed,datosCovidSemana[6].Confirmed],
            lineTension: 0,
            fill: false
        };

        let dataTercero = {
            label: "Recuperados",
            backgroundColor:"#9d0fa1",
            borderColor:"rgb(124, 27, 100)",
            data:[datosCovidSemana[0].Recovered,datosCovidSemana[1].Recovered,datosCovidSemana[2].Recovered,datosCovidSemana[3].Recovered,datosCovidSemana[4].Recovered,datosCovidSemana[5].Recovered,datosCovidSemana[6].Recovered],
            lineTension: 0,
            fill: false,
        };

        let dataCuarta = {
            label: "Active",
            data:[datosCovidSemana[0].Active,datosCovidSemana[1].Active,datosCovidSemana[2].Active,datosCovidSemana[3].Active,datosCovidSemana[4].Active,datosCovidSemana[5].Active,datosCovidSemana[6].Active],
            lineTension: 0,
            fill: false,
        };

        let speedData = {
            labels:[datosCovidSemana[0].Date,datosCovidSemana[1].Date,datosCovidSemana[2].Date,datosCovidSemana[3].Date,datosCovidSemana[4].Date,datosCovidSemana[5].Date,datosCovidSemana[6].Date],
            datasets: [dataUno, dataSegundo, dataTercero, dataCuarta]
        };

        window.grafica= new Chart(ctx,{
            type:"line",
            data:speedData
 
        });
    }
    
    /*-----------------------------------------------------
    mostrarGraficosPaises
    ------------------------------------------------------*/


    mostrarGraficosPaises(datosCovid){
        
        if (window.grafica) {
            window.grafica.clear();
            window.grafica.destroy();
        }
        
        let datosFiltrados = this.filtrarDatos(datosCovid);
        let valoresGrafica = this.muertesCovid(datosFiltrados);
        let contagios = this.ContagiosCovid(datosFiltrados);

        
        let muertes = valoresGrafica.slice(0,valoresGrafica.length/2);
        let paises = valoresGrafica.slice(20);

        
        let datos = {
            labels: paises,
            datasets:[{
                label:"muertos",
                backgroundColor:"rgba(90, 11, 77, 0.75)",
                data:muertes
            },
            {
                label:"Contagiados",
                backgroundColor:'rgba(33, 72, 179)',
                data:contagios
            }]
        };

        window.grafica = new Chart(ctx,{
            type:"horizontalBar",
            data:datos,
            options:{
                elements:{
                    rectangle:{
                        BorderWidth:1,
                        borderColor:"rgba(90, 11, 77, 0.75)"
                    }
                },
                responsive:true,
                title:{
                    display:true,
                    text:"graficos paises",
                }
            }
        });

        /*window.grafica = new Chart(ctx,{
            type:"horizontalBar",
            data:{   
                labels: paises,
                datasets:[{
                    label:'Muertes por Covid',    
                    backgroundColor:"#600a63",
                    hoverBackgroundColor:"#600a63",
                    hoverBackgroundColor: [
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)',
                    ],
                    hoverBorderColor:[
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)',
                        'rgba(90, 11, 77, 0.75)'
                    ],    
                    hoverBorderWidth:3,
                    data: muertes
                }]
            }    
        });*/
    }

    filtrarDatos(datosCovid){
       
        let resultado = datosCovid.filter(covid => covid.TotalDeaths > 8000);
        return resultado;
    }
    
    muertesCovid(datosCovid){
        
        let arrayValores = [];
        let arrayPaises = [];
        
        for(let i = 0; i < datosCovid.length ; i++){
            arrayValores.push(datosCovid[i].TotalDeaths);
            arrayPaises.push(datosCovid[i].Country);
        }
        let arrayGraficas = arrayValores.concat(arrayPaises);
        return arrayGraficas;
    }

    ContagiosCovid(datosCovid){
        
        let arrayValores = [];    
        for(let i = 0; i < datosCovid.length ; i++){
            arrayValores.push(datosCovid[i].TotalConfirmed);
        }
        return arrayValores;
    }

}

