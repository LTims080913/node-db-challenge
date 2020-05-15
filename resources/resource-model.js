const db = require('../data/db-config')
const knex = require('knex')
const knexfile = require('../knexfile')

module.exports = {
    find, 
    add
}

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources')
    .insert(resource, 'id')
    .then(ids => {
        return find()
    })
}