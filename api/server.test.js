const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('[GET] /hobbits', () => {
  let res
  beforeEach(async () => {
    res = await request(server).get('/hobbits')
  })
  test('responds with a 200 OK', async () => {
    expect(res.status).toBe(200)
  })
  test('responds with all hobbits', async () => {
    expect(res.body).toHaveLength(4)
    expect(res.body).toMatchObject([
      { name: 'sam', id: 1 },
      { name: 'frodo', id: 2 },
      { name: 'pippin', id: 3 },
      { name: 'merry', id: 4 },
    ])
  })
})
describe('[POST] /hobbits', () => {
  test('responds with the new hobbit', async () => {
    const res = await request(server)
      .post('/hobbits')
      .send({ name: 'bilbo' })
    expect(res.body).toMatchObject({ id: 5, name: 'bilbo' })
  })
  test('')
})
