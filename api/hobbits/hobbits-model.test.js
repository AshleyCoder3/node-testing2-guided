const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

beforeAll(async () => {
  
})

test('the environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
