const dontenv = require("dotenv").config();
const axios = require("axios");
const helpers = require('./helpers')

const [, , ...args] = process.argv;
const locations = helpers.formatInputs([...args]);

function getTimeWeather(locationArray) {
  if (!locationArray) {
    console.log("kindly provide location(s)");
  } else {
    console.log("request processing...");
    const locationsData = helpers.getWeatherInfo(locationArray);

    axios.all(locationsData)
    .then(axios.spread((...res) => {
      res.forEach((location) => {
        const locationName = location.data.name;
        const currentTime = helpers.getTimeFromTimezone(location.data.timezone);
        const description = location.data.weather[0].description;
        const tempPressureHumidity = location.data.main;
        const visibility = location.data.visibility;
        const windSpeed = location.data.wind.speed;
        const locationWeatherInfo = {
          locationName,
          currentTime,
          weather: {
            description,
            ...tempPressureHumidity,
            visibility,
            windSpeed
          }
        };
        console.log(locationWeatherInfo);
      });
    })).catch(err => {
      if (err.response) {
        console.log({ 'seperate locations with commas (without spaces)': err.response.data.message });
      } else {
        console.log({ 'an error occured': 'kindly verify internet connectivity and try again' });
      };
    });
  };
};

getTimeWeather(locations);
module.exports = getTimeWeather;