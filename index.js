const dontenv = require("dotenv").config();
const request = require("request");

const location = process.argv[2];

const wetherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.KEY}`;

const getTime = (timezone) => {
  const currentDate = new Date();
  // get exact time from current date
  const currentTime = currentDate.getTime();
  console.log(currentTime);
  console.log(currentDate.getTimezoneOffset());
}

request (wetherUrl, (error, response, body) => {
  try {
    const result = JSON.parse(body);
    const time = getTime(result.timezone);
    console.log(result)
    console.log(time)
  } catch {
    const error = JSON.parse(error);
    if (err == null) {
      console.log('here')
    }
  }
})
