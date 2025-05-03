import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  protected tableName = 'tags'

  async up() {
    this.defer(async (db) => {
      await db.table(this.tableName).insert([
        { id: 1, description: 'Multiplayer' },
        { id: 2, description: 'Survival' },
        { id: 3, description: 'FPS' },
        { id: 4, description: 'Battle Royale' },
        { id: 5, description: 'RPG' },
        { id: 6, description: 'MMORPG' }
      ])
    })
  }

  async down() {
    this.defer(async (db) => {
      await db.from(this.tableName)
        .whereIn('id', [1, 2, 3, 4, 5, 6])
        .delete()
    })
  }

}