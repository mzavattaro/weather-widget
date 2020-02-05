const getPosition = () => new Promise(((latitude, longitude) => {
    navigator.geolocation.getCurrentPosition(latitude, longitude);
}));

export default getPosition;
