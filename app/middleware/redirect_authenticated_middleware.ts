import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RedirectAuthenticatedMiddleware {
  async handle({ }: HttpContext, next: NextFn) {

    // TODO rever esse redirect ( fica em loop )

    // if (await auth.check()) {
    //   return response.redirect('/')
    // }

    const output = await next()

    return output
  }
}