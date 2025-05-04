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
const SectionController = () => import('#controllers/section_controller')

router.group(() => {
    router.get('/', [HomeController, 'index']);

    router.get('/game/create', [GameController, 'create'])
    router.get('/game', [GameController, 'index'])
    router.post('/game', [GameController, 'store'])
    router.get('/game/:id', [GameController, 'show'])
    router.get('/game/:id/edit', [GameController, 'edit'])
    router.put('/game/:id', [GameController, 'update'])

    router.put('/section/:id', [SectionController, 'update'])
    router.get('/section/:id/edit', [SectionController, 'edit'])
    router.post('/section', [SectionController, 'store'])
    router.get('/section', [SectionController, 'index'])
    router.get('/section/create', [SectionController, 'create'])
    router.delete('/section/:id', [SectionController, 'destroy'])

}).use(middleware.auth())

router.group(() => {
    router.get('/register', [RegisterController, 'index']);
    router.get('/login', [SessionController, 'index'])
})

router.group(() => {
    router.post('/register', [RegisterController, 'store']);
    router.post('/login', [SessionController, 'store'])
})

router.post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
}).use(middleware.auth())



