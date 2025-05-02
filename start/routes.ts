/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
import { middleware } from './kernel.js';

const HomeController = () => import('#controllers/home_controller')
const GameController = () => import('#controllers/game_controller');
const SessionController = () => import('#controllers/session_controller')
const RegisterController = () => import('#controllers/register_controller')

router.group(() => {
    router.get('/', [HomeController, 'index']);
}).use(middleware.auth())

router.group(() => {
    router.get('/register', [RegisterController, 'index']);
    router.get('/login', [SessionController, 'index'])
})

router.group(() => {
    router.post('/register', [RegisterController, 'store']);
    router.post('/login', [SessionController, 'store'])
}).use(middleware.redirectAuth())

router.post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
}).use(middleware.auth())

router.resource('games', GameController)

