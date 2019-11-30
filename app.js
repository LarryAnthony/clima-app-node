const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: "Dirección de la cuidad para obtener el clima",
        demand: true
    }
}).argv


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng)
            // return `El clima de ${direccion} es de ${Math.round(temp-273.15)} °C`
        return `El clima de ${direccion} es de ${temp} °C`
    } catch (e) {
        return `No se pudo determinar la temperatura de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)