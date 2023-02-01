import { weatherApi } from "./apiConfig";

// If you do not know the grid that correlates to your location, you can use the /points endpoint to retrieve the exact grid endpoint by coordinates
export const getPoints = async () => {
    const res = await weatherApi.get('/points')
    return res.data
}

