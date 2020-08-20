export class UI {
    constructor(bici) {
        
        this.bici = bici;
        this.markers = new L.LayerGroup();
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([-34.6083,  -58.3712], 13);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
            }).addTo(map);
        return map;
    }

    mostrarEcoBici(){
        this.bici.obtenerDatos().then((datos) => {
            this.mostrarPines(datos.respuestaJson.data.stations);
        })

    }

    mostrarPines(dataBici){
        
        this.markers.clearLayers();
       
        dataBici.forEach(datoBici => {

            const {lat,lon,address,capacity,name,station_id,groups} = datoBici;

            const optionsPopUp = L.popup().setContent(`<p>idEstacion: ${station_id}</p>
                <p><b>Capacidad:</b> ${capacity}</p>
                <p><b>Nombre:</b> ${name}</p>
                <p><b>Barrio:</b> ${groups}</p>  
                <p><b>Direccion:</b> ${address}</p>                                              
            
            `);     
            
            //agregar ping
            const marker = new L.Marker([
                parseFloat(lat),
                parseFloat(lon)
            ]).bindPopup(optionsPopUp);

            this.markers.addLayer(marker);
        });
        
        this.markers.addTo(this.mapa);
    }

    obtenerSuguerencias(busqueda){
        this.bici.obtenerDatos()
            .then((datos) => {
                const resultado = datos.respuestaJson.data.stations;
                this.filtrarResultados(resultado,busqueda);
        })
    }

    filtrarResultados(resultado,busqueda){

        const filtro = resultado.filter(filtro => filtro.address.indexOf(busqueda) !== -1 || filtro.groups.indexOf(busqueda.toUpperCase()) !== -1);
        this.mostrarPines(filtro);
    }




}