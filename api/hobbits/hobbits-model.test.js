const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('Hobbits Model', () => {
  describe('getAll', () => {
    test('', async () => {

    })
  })
  describe('getById', () => {

  })
  describe('insert', () => {

  })
})

test('the environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
