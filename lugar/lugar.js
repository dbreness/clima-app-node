const axios = require('axios');
const clima = require('E:/node/05-Weather/clima/clima');



const getLugarLatLon = async(pdireccion) => {

    //prepara el parametro para poder se enviado en el URI
    const pdireccionUri = encodeURI(pdireccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${pdireccionUri}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '2993b51eacmsh1b22d067825fd6fp18a60djsn95c5b2642d24' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`no se encontro resultados para: ${pdireccion}`);
    }

    //obtiene los resultados
    const data = response.data.Results;

    const newData = [];

    for (let i = 0; i < data.length; i++) {
        const lugar = data[i];
        //obtiene la temperatura , segun la lat y lon de la direccion por parametro
        // const temp = getClima(lugar.lat, lugar.lon);
        const temp = await clima.getClima(lugar.lat, lugar.lon);
        //construlle la respuesta
        const result = {
            direction: lugar.name,
            lat: lugar.lat,
            lon: lugar.lon,
            temperatura: temp
        }
        newData.push(result);
    }



    return newData;

}



module.exports = {
    getLugarLatLon
}