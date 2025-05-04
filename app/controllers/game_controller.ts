import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

import { createGameValidator } from '#validators/game';

import GameService from '../service/game_service.js';
import { GameDTO } from '../dtos/game_dto.js';
import TagService from '../service/tag_service.js';

export default class GameController {

  /**
   * Display a list of resource
   */

  @inject()
  async index({ inertia }: HttpContext, gameService: GameService, tagService: TagService) {

    const [games, tags] = await Promise.all([
      gameService.findAll(),
      tagService.findAll()
    ])

    return inertia.render('game/index', { games, tags })
  }

  /**
   * Display form to create a new record
   */
  @inject()
  async create({ inertia }: HttpContext, tagService: TagService) {

    const tags = await tagService.findAll();

    return inertia.render('game/create', { tags })
  }

  /**
   * Handle form submission for the create action
   */
  @inject()
  async store({ request, response }: HttpContext, gameService: GameService) {

    const payload = await request.validateUsing(createGameValidator) as GameDTO;

    const game = await gameService.store(payload);

    response.redirect(`game/${game.id}`)
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
  async edit({ params, inertia }: HttpContext, gameService: GameService, tagService: TagService) {

    const [game, tags] = await Promise.all([
      gameService.findOneById(params.id),
      tagService.findAll()
    ])

    return inertia.render('game/edit', { game, tags })
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
  async destroy({ }: HttpContext) { }
}