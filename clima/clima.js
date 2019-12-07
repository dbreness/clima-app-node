const axios = require('axios');

const getClima = async(plat, plon) => {

    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${plat}&lon=${plon}&appid=ba20f41c916456168a871df90dee9291&units=metric`);


    return result.data.main.temp;

}



module.exports = {
    getClima
}