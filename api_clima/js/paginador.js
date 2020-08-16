export class paginador{
    paginaActual;
    paginaFinal;	
    paginador;
    
    constructor(paginaActual,paginaFinal,paginador){

        this.paginaActual=paginaActual;
        this.paginaFinal=paginaFinal;
        this.paginador=paginador;
    }
    paginacion(datosTotal,datosPorPagina){
        //console.log("funciona");
        
        let pag_consiguiente;
        pag_consiguiente!= 1; 
        let itr=1;

        let table=`<nav aria-label="paginador" style="text-align: center;"><ul class="pagination justify-content-center">`;		 		
        let totalPaginas = Math.ceil(datosTotal/datosPorPagina);


        if(this.paginaActual < totalPaginas){
            this.paginaConsiguiente();
        }
        else if(this.paginaActual == totalPaginas){
            this.paginaRetroceso();
        }
    }

    paginaConsiguiente(){
        for(let x=0;x<=totalPaginas; x++) {
					
            table+='<li class="page-item"><a" class="page-link" href="#">'+x+'</a></li>';
            document.querySelector("#paginador").appendChild(table);
        }
    }   

    paginaRetroceso(){
        for(let x=0;x<=totalPaginas; x++) {
					
            table+='<li class="page-item"><a" class="page-link" href="#">'+x+'</a></li>';
            document.querySelector("#paginador").appendChild(table);
        }
    }
    
    


}