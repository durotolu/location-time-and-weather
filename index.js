const dontenv = require("dotenv").config();
const request = require("request");

const location = process.argv[2];


const getTime = (timezone) => {
  const currentDate = new Date();
  // get exact time from current date
  const currentTime = currentDate.getTime();
  console.log(currentTime);
  console.log(currentDate.getTimezoneOffset());
}
