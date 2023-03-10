import { weatherApi } from "./apiConfig";

// note from api: if you do not know the grid that correlates to your location, you can use the /points endpoint to retrieve the exact grid endpoint by coordinates
// get city, state, and forecasthourly
// to reach 'points' endpoint, get lat and long values up to the fourth decimal point

let lat = 0
let long = 0

export const GetCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const p = position.coords;
        lat += p.latitude
        long += p.longitude
        console.log("lat:", lat, "long:", long);
    })
}

export const getPoints = async () => {
    const res = await weatherApi.get(`/points/${lat},${long}`)
    return res.data
}

// get time, temperature, short forecast
// use temperature closest to the current device time, play music based off of most recent weather
// to reach 'forecast' endpoint, get "forecastHourly" key:value pair from '/points'

// export const getForecast = async ({lat, long}) => {
//     const res = await weatherApi.get('/forecast')
//     return res.data
// }


