import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthorizedException extends Exception {
    async handle(error: this, ctx: HttpContext) {
        ctx.response.status(error.status).send(error.message)
    }
}