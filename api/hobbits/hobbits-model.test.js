const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db('hobbits').truncate()
  await db('hobbits').insert([
    { name: 'frodo' },
    { name: 'sam' },
    { name: 'frodo' },
    { name: 'frodo' },
  ])
})

test('the environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
