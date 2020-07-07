const index = require('./index');
const request = require('supertest');

describe('index', () => {
  describe('[GET] / endpoint', () => {
    test('a key is provided for the api', () => {
      expect(process.env.KEY).toBe('771dcef478ae5faab8ee377e738531eb')
    })
  })
})