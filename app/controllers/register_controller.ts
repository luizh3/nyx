import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { sendEmailConfirmation } from '../service/rabbitmq_service.js';

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

        if (user) {
            await sendEmailConfirmation(user)
            context.session.flash('success', 'Cadastro realizado com sucesso! Enviamos um e-mail de confirmação para você.')
        }

        context.response.redirect('/register')
    }

}