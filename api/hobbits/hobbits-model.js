const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('hobbits')
}

function getById(id) {
  return db('hobbits').where('id', id).first()
}

async function insert(hobbit) {
  // NOT NECESSARY IN POSTGRES
  const [id] = await db("hobbits").insert(hobbit)
  return getById(id)
  // POSTGRES
  // const [hobbit] = await db('hobbits')
  //   .insert(hobbit, ['id', 'name'])
}

async function update(id, changes) {
  return null
}

function remove(id) {
  return null
}
