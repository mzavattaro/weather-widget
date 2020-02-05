import ApiConfig from './apiKeys';
import print from './print';

const getWeather = async (latitude, longitude) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
    const data = await api_call.json();
    print('API Data: ', data);
};


export default getWeather;
