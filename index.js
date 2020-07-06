const dontenv = require("dotenv").config();
const axios = require("axios");

const cmdLineArgs = process.argv;
const locations = cmdLineArgs.splice(2)
console.log(locations)

if (!locations) {
  console.log("kindly provide location(s)")
  return;
}

const getTime = (timezone) => {
  const currentDate = new Date();
  // get exact time from current date
  const currentTime = currentDate.getTime();

  const localTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
  const utcTime = currentTime + localTimezoneOffset;

  const timeAdjusted = utcTime + timezone * 1000;
  return new Date(timeAdjusted).toLocaleTimeString("en-US")
}

const arr = []

locations.forEach((location) => {
  const locationName = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.KEY}`);
  arr.push(locationName)
})

axios.all(arr)
  .then(axios.spread((...res) => {
    res.forEach((location) => {
      console.log(location.data)
    })
  })).catch(err => {
    console.log(err)
  })