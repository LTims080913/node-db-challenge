const db = require('../data/db-config')
const knex = require('knex')
const knexfile = require('../knexfile')

module.exports = {
    find, 
    add
}

function find() {
    return db('tasks')
}

function add(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(ids => {
        return find()
    })
}