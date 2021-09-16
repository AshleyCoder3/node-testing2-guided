const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

test('the environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
