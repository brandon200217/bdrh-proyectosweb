export class Api{

    async obtenerDatos(){

        const datos = await fetch(`https://apitransporte.buenosaires.gob.ar/ecobici/gbfs/stationInformation?client_id=de5894cfa6454a0193079f1d710f363a&client_secret=C3dB01BFb7194A7f958D37E40E01Ef7A`);
        const respuestaJson = await datos.json();

        return {
            respuestaJson
        };

    }

}