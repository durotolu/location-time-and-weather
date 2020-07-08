const request = require('supertest');
const axios = require('axios');
// const getWeatherInfo = require('./index');
const helpers = require('./helpers');

jest.mock("axios");
// const mockedAxios = axios as jest.mockedAxios
// axios.get.mockResolvedValue(resp);

test('formatInputs returns array of locations', async () => {
  const response = helpers.formatInputs([ 'Lagos,New', 'York,New', 'Zealand,London,Texas,New', 'Jersey' ]);
  expect(response).toEqual(["Lagos", "New York", "New Zealand", "London", "Texas", "New Jersey"])
});