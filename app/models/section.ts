import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Game from '#models/game'

export default class Section extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare description: string

  @column()
  declare maxElements: number;

  @column()
  declare minElements: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Game, {
    pivotTable: 'game_sections',
  })

  declare games: ManyToMany<typeof Game>

}