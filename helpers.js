const axios = require("axios");

module.exports = {
  formatInputs,
  getTimeFromTimezone,
  getWeatherInfo
};

function formatInputs(arr) {
  const stringInputs = arr.reduce((acc, curr) => (acc += ` ${curr}`));
  return stringInputs.split(',');
}

function getTimeFromTimezone(timezone) {
  const currentDate = new Date();
  // get exact time from current date
  const currentTime = currentDate.getTime();
  const localTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
  const utcTime = currentTime + localTimezoneOffset;
  const timeAdjusted = utcTime + timezone * 1000;
  return new Date(timeAdjusted).toLocaleTimeString("en-US");
}

function getWeatherInfo(locations) {
  const locationsData = [];
  locations.forEach((location, index) => {
    const locationData = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=771dcef478ae5faab8ee377e738531eb`);
    locationsData[index] = locationData;
  });
  return locationsData
}