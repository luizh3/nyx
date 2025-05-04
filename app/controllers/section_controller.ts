import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

import { createSectionValidator } from '#validators/section';

import GameService from '../service/game_service.js'
import SectionService from '../service/section_service.js';
import { SectionDTO } from '../dtos/section_dto.js';

export default class SectionsController {

  @inject()
  async index({ inertia }: HttpContext, sectionService: SectionService) {

    const sections = await sectionService.findAll();

    return inertia.render('section/index', { sections })
  }

  @inject()
  async create({ inertia }: HttpContext, gameService: GameService) {

    const games = await gameService.findAll();

    return inertia.render('section/create', { games })
  }

  @inject()
  async store({ request, response }: HttpContext, sectionService: SectionService) {

    const payload = await request.validateUsing(createSectionValidator) as SectionDTO;

    await sectionService.create(payload);

    response.redirect(`/section`)

  }

  @inject()
  async edit({ params, inertia }: HttpContext, gameService: GameService, sectionService: SectionService) {

    const [section, games] = await Promise.all([
      sectionService.findOneById(params.id),
      gameService.findAll()
    ])

    return inertia.render('section/edit', { games, section })
  }

  @inject()
  async update({ params, request, response }: HttpContext, sectionService: SectionService) {

    const payload = await request.validateUsing(createSectionValidator) as SectionDTO;

    payload.id = params.id;

    await sectionService.update(payload);

    response.redirect(`/section`)

  }


  /**
   * Delete record
   */
  @inject()
  async destroy({ params, response }: HttpContext, sectionService: SectionService) {

    sectionService.delete(params.id);

    response.redirect(`/section`)

  }

}