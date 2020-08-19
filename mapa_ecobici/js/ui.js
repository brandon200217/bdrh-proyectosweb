export class UI {
    constructor(bici,makers) {
        
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

            console.log(lat,lon,address,capacity,name,station_id,groups);


            const options     
            
            //agregar ping
            const marker = new L.Marker([
                parseFloat(lat),
                parseFloat(lon)
            ]);

            this.markers.addLayer(marker);
        });
        
        this.markers.addTo(this.mapa);
    }




}