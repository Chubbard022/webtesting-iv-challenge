const db = require("../config/knexConfig")

module.exports = {
    insert,
    update,
    remove,
    getAll,
    finById
}

async function insert(hobbit) {
    const [id] = await db("hobbits").insert(hobbit);
  
    return db("hobbits")
      .where({ id })
      .first();
  }

async function update(id,changes){
    return null
}
async function remove(id){
    return null
}
function remove(id){
    return id
}
function getAll(){
    return db("hobbits")
}
function findById(id){
    return null
}
