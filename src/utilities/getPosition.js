// This getPosition() function uses navigator.geolocation to retrieve the user's latitude and longitude coordinates from within the browser
// This function is passed into the useEffect Hook in order to provide requestWeather async function with longitude and latitude coordinates that are then passed into the weather API URL
const getPosition = () => new Promise(((latitude, longitude) => {
    navigator.geolocation.getCurrentPosition(latitude, longitude);
}));

export default getPosition;
