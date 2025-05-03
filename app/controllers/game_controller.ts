import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'
import GameService from '../service/GameService.js';
import { GameDTO } from '../dtos/GameDTO.js';
import { createGameValidator } from '#validators/game';

export default class GameController {
  /**
   * Display a list of resource
   */

  async index({ inertia }: HttpContext,) {
    return inertia.render('game/index')
  }

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('game/create')
  }

  /**
   * Handle form submission for the create action
   */
  @inject()
  async store({ request, response }: HttpContext, gameService: GameService) {

    const payload = await request.validateUsing(createGameValidator) as GameDTO;

    console.log(payload);

    const game = await gameService.store(payload);

    response.redirect(`${game.id}`)
  }

  /**
   * Show individual record
   */
  @inject()
  async show({ params, inertia }: HttpContext, gameService: GameService) {

    const game = await gameService.findOneById(params.id);

    return inertia.render('game/show', { game: game })

  }

  /**
   * Edit individual record
   */
  @inject()
  async edit({ params, inertia }: HttpContext, gameService: GameService) {

    const game = await gameService.findOneById(params.id)

    return inertia.render('game/edit', { game: game })
  }

  /**
   * Handle form submission for the edit action
   */
  @inject()
  async update({ params, request, response }: HttpContext, gameService: GameService) {

    const payload = await request.validateUsing(createGameValidator) as GameDTO;

    payload.id = params.id;

    const game = await gameService.update(payload);

    response.redirect(`${game.id}`)

  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}