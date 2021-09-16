const Hobbit = require('./hobbits-model')


test('the environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
