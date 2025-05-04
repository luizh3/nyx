import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import SectionService from '../service/SectionService.js'

export default class HomeController {

    @inject()
    async index({ inertia }: HttpContext, sectionService: SectionService) {

        const sections = await sectionService.findAll();

        return inertia.render('home/index', { sections });
    }
}
