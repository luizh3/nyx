import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Tag from '#models/tag'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare posterImageUrl: string

  @column()
  declare description: string

  @column()
  declare name: string

  @column()
  declare percentageDiscount: number

  @column()
  declare price: number

  @column()
  declare liquidPrice: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Tag, {
    pivotTable: 'game_tags',
  })
  declare tags: ManyToMany<typeof Tag>

}