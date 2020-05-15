
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name', 50)
      .notNullable()
      tbl.string('description', 256)
      tbl.boolean('completed')
      .defaultTo(false)
  })

  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('description', 128)
      .notNullable()
      tbl.string('notes', 512)
      tbl.boolean('completed')
      .defaultTo(false)
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })

    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name', 50)
        .notNullable()
        tbl.string('description', 512)

    })

    .createTable('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_recources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
  
};
