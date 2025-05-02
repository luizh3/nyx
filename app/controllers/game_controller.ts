import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'
import GameService from '../service/GameService.js';
import { GameDTO } from '../dtos/GameDTO.js';

export default class GameController {
  /**
   * Display a list of resource
   */

  async index(context: HttpContext,) {

  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  @inject()
  async store({ request }: HttpContext, gameService: GameService) {

    const data = request.all() as GameDTO

    gameService.store(data);

  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update(context: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}