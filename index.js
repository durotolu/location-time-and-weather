const dontenv = require("dotenv").config();
const axios = require("axios");

const cmdLineArgs = process.argv;
const locations = cmdLineArgs.splice(2);

if (!locations) {
  console.log("kindly provide location(s)");
  return;
}

const getTime = (timezone) => {
  const currentDate = new Date();
  // get exact time from current date
  const currentTime = currentDate.getTime();

  const localTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
  const utcTime = currentTime + localTimezoneOffset;

  const timeAdjusted = utcTime + timezone * 1000;
  return new Date(timeAdjusted).toLocaleTimeString("en-US");
}

const locationsData = []

locations.forEach((location) => {
  const locationData = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.KEY}`);
  locationsData.push(locationData);
})

axios.all(locationsData)
  .then(axios.spread((...res) => {
    res.forEach((location) => {
      const locationName = location.data.name;
      const currentTime = getTime(location.data.timezone);
      const temperature = location.data.main.temp;
      const description = location.data.weather[0].description;
      const main = location.data.main;
      const visibility = location.data.visibility;
      const windSpeed = location.data.wind.speed;
      const locationWeatherInfo = {
        locationName,
        currentTime,
        weather: {
          description,
          ...main,
          visibility,
          windSpeed
        }
      };
      console.log(locationWeatherInfo)
    });
  })).catch(err => {
    if (err.response) {
      console.log({ 'an error occured': err.response.data.message });
    } else {
      console.log({ 'an error occured': 'kindly verify internet connectivity and try again' });
    }
  });