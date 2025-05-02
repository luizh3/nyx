import AuthorizedException from '#exceptions/AuthorizedException'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {

    async index({ inertia }: HttpContext) {
        return inertia.render('register')
    }

    async store(context: HttpContext) {

        const { email, password } = context.request.only(['email', 'password'])

        const user = await User.create({
            email: email,
            password: password
        }).catch(() => {
            // throw new AuthorizedException('Usuário não autorizado para acessar este recurso')\
        })

        if (!user) {
            // throw new AuthorizedException('Usuário não autorizado para acessar este recurso')
        }

        context.response.redirect('/login')

    }

}