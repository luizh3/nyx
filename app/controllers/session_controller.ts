import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { sendEmailConfirmation } from '../service/rabbitmq_service.js'

export default class SessionController {

    async index({ inertia }: HttpContext) {
        return inertia.render('login')
    }

    async store({ request, auth, response, session }: HttpContext) {

        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)

        if (!user.email_confirmed) {
            session.flash('error', 'É necessário confirmar seu e-mail antes de acessar a plataforma.')
            return response.redirect('/login')
        }

        await auth.use('web').login(user)

        response.redirect('/')
    }

    async resendConfirmation({ request, response, session }: HttpContext) {
        const { email } = request.only(['email'])
        
        try {
            const user = await User.findBy('email', email)
            
            if (!user) {
                session.flash('error', 'E-mail não encontrado.')
                return response.redirect('/login')
            }

            if (user.email_confirmed) {
                session.flash('success', 'Seu e-mail já está confirmado.')
                return response.redirect('/login')
            }

            await sendEmailConfirmation(user)
            session.flash('success', 'E-mail de confirmação reenviado com sucesso!')
            
        } catch (error) {
            session.flash('error', 'Erro ao reenviar e-mail de confirmação.')
        }

        return response.redirect('/login')
    }

    async confirmEmail({ params, response, session, inertia }: HttpContext) {
        const userId = params.id
        
        try {
            const user = await User.findOrFail(userId)
            
            if (user.email_confirmed) {
                return inertia.render('email-confirmed', { 
                    success: true, 
                    message: 'Seu e-mail já estava confirmado!' 
                })
            }

            user.email_confirmed = true
            await user.save()
            
            return inertia.render('email-confirmed', { 
                success: true, 
                message: 'E-mail confirmado com sucesso! Agora você pode fazer login.' 
            })
            
        } catch (error) {
            return inertia.render('email-confirmed', { 
                success: false, 
                message: 'Link de confirmação inválido ou expirado.' 
            })
        }
    }
}
