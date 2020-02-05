// import React, { useEffect, useState } from 'react';
// import ApiConfig from '../../utilities/apiKeys';
// import print from '../../utilities/print';

// const userWeather = () => {
//     const [userWeather, setUserWeather] = useState('Loading...');
//     const [city, setCity] = useState('Sydney');
//     const [lat, setLat] = useState('');
//     const [lon, setLon] = useState('');
//     const [temperatureC, setTemperatureC] = useState('33');
//     const [icon, setIcon] = useState('');

//     useEffect(() => {
//         const { getPosition } = this;
//         getPosition().then((position) => {
//             const { getWeather } = this;
//             const { latitude, longitude } = position.coords;
//             getWeather(latitude, longitude);
//         }).catch((err) => print(err.message));
//     });

//     getPosition = () => new Promise(((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     }));

//     getWeather = async (latitude, longitude) => {
//         const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
//         const data = await api_call.json();
//         print('Data: ', data);
//     };

// componentDidMount() {
//     const { getPosition } = this;
//     getPosition()
//         .then((position) => {
//             const { getWeather } = this;
//             const { latitude, longitude } = position.coords;
//             getWeather(latitude, longitude);
//         })
//         .catch((err) => print(err.message));
// }

// getPosition = () => new Promise(((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
// }));

// getWeather = async (latitude, longitude) => {
//     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiConfig}&units=metric`);
//     const data = await api_call.json();
//     print('Data: ', data);
// };

// };

// export default userWeather;
