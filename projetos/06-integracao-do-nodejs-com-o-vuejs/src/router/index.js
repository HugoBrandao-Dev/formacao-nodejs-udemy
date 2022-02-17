import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/admin/users',
		name: 'Users',
		component: Users,

		// Router guard, que é executado antes de entrar na página.
		beforeEnter: (to, from, next ) => {
			if(localStorage.getItem('TokenAPIUser')) {

				// Prossegue com a requisição, caso encontre o token no localStorage
				next()
			} else {
				console.log('Token não encontrado.')
				// Caso não seja encontrado o token, o usuário será redirecionado para a tela de login.
				next('/login')
			}
		}
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
