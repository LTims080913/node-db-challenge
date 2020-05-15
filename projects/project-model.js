const db = require('../data/db-config')
const knex = require('knex')
const knexfile = require('../knexfile')

module.exports = {
    find, 
    add
}

function find() {
    return db('projects')
}

function add(project) {
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        return find()
    })
}