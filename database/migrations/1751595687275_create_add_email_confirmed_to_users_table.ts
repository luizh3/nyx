import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddEmailConfirmedToUsers extends BaseSchema {
  public async up () {
    this.schema.alterTable('users', (table) => {
      table.boolean('email_confirmed').notNullable().defaultTo(false)
    })
  }

  public async down () {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('email_confirmed')
    })
  }
}