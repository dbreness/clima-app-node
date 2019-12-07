const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Descripcion del lugar',
        demand: true
    }
}).argv;
const getLugarLatLon = require('./lugar/lugar').getLugarLatLon;





getLugarLatLon(argv.direction).then(response => {
        for (let i = 0; i < response.length; i++) {
            const lugar = response[i];
            console.log(lugar);

        }
    })
    .catch(err => console.log(err.message));