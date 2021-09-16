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
    test('returns hobbits in the correct shape', async () => {
      const expected = [
        {
          "id": 1,
          "name": "sam"
        },
        {
          "id": 2,
          "name": "frodo"
        },
        {
          "id": 3,
          "name": "pippin"
        },
        {
          "id": 4,
          "name": "merry"
        }
      ]
      expect(await Hobbit.getAll()).toMatchObject(expected)
    })
  })
  describe('getById', () => {
    test('returns hobbits with correct properties', async () => {
      const sam = await Hobbit.getById(1);
      expect(sam).toMatchObject({ id: 1, name: 'sam' })
      const frodo = await Hobbit.getById(2)
      expect(frodo).toMatchObject({ id: 2, name: 'frodo' })
    })
  })
  describe('insert', () => {
    test('creates a new hobbit in the db', async () => {
      Hobbit.insert({ name: 'bilbo' })
      
    })
    test('resolves to the newly created hobbit', async () => {

    })
  })
})

test('the environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
