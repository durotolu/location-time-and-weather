const request = require('supertest');
const axios = require('axios');
const helpers = require('./helpers');

jest.mock("axios");

test('formatInputs returns array of locations', () => {
  const response = helpers.formatInputs([ 'Lagos,New', 'York,New', 'Zealand,London,Texas,New', 'Jersey' ]);
  expect(response).toEqual(["Lagos", "New York", "New Zealand", "London", "Texas", "New Jersey"]);
});

test('getTimeFromTimezone returns the current time based on timezone', () => {
  const currentDate = new Date();
  const localTimezone = currentDate.getTimezoneOffset() * -60;
  const localTime = helpers.getTimeFromTimezone(localTimezone);
  expect(localTime).toEqual(currentDate.toLocaleTimeString());
});

test('getWeatherInfo returns undefined without proper Promise handling', () => {
  const locations = ['Lagos']
  const weatherInfo = helpers.getWeatherInfo(locations);
  expect(weatherInfo).toEqual([undefined]);
});