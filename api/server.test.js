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
  test('responds with a 200 OK', async () => {
    const res = await request(server).get('/hobbits')
    console.log(res.body)
    expect(res.status).toBe(200)
  })
})
