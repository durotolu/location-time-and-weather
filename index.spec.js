const request = require('supertest');
const axios = require('axios');
// const getWeatherInfo = require('./index');
const helpers = require('./helpers');

// jest.mock("axios");


test('formatInputs returns array of locations', async () => {
  const response = helpers.formatInputs([ 'Lagos,New', 'York,New', 'Zealand,London,Texas,New', 'Jersey' ]);
  expect(response).toEqual(["Lagos", "New York", "New Zealand", "London", "Texas", "New Jersey"]);
});

test('getTimeFromTimezone returns the current time based on timezone', async () => {
  const currentDate = new Date();
  const localTimezone = currentDate.getTimezoneOffset() * -60;
  const localTime = helpers.getTimeFromTimezone(localTimezone);
  expect(localTime).toEqual(currentDate.toLocaleTimeString());
});