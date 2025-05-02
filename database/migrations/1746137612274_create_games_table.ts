import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('poster_image_url').notNullable()
      table.string('name').notNullable()
      table.decimal('percentage_discount').nullable()
      table.decimal('price').notNullable()
      table.decimal('liquid_price').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}