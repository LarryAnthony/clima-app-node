const axios = require('axios')


const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'x-rapidapi-key': 'f8ee4ef2b1msh8b259b574d3a007p1bfea2jsnf43c314d26b0' }
    });
    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);

    }
    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}