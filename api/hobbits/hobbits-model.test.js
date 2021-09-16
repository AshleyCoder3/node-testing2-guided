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
    test('returns all hobbits in the table', async () => {
      const hobbits = await Hobbit.getAll()
      expect(hobbits).toHaveLength(4)
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
