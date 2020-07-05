const dontenv = require("dotenv").config();
const request = require("request");

const location = process.argv[2];

if (!location) {
  console.log("Kindly provide location(s)")
  return;
}

const wetherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.KEY}`;

const getTime = (timezone) => {
  const currentDate = new Date();
  // get exact time from current date
  const currentTime = currentDate.getTime();

  const localTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
  const utcTime = currentTime + localTimezoneOffset;

  const timeAdjusted = utcTime + timezone * 1000;
  return new Date(timeAdjusted).toLocaleTimeString("en-US")
}

request (wetherUrl, (error, response, body) => {
  try {
    const result = JSON.parse(body);
    const time = getTime(result.timezone);

    if (result.cod !== '200') {
      console.log(result.message);
      return;
    } else {
      const name = result.name
      const temperature = result.main.temp
      console.log({
        temp: result.n,
      });
    }
  } catch {
    const errorMsg = JSON.parse(error);
    if (errorMsg == null) {
      console.log('here')
    }
    console.log('gthing')
  }
})
