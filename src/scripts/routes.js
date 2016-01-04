import App from './components/app'
import Home from './components/Home/home'
import SignUp from './components/signUp/signUp'
import Login from './components/login/login'
import Jogs from './components/jogs/jogs'

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'signup', component: SignUp },
    { path: 'login', component: Login },
    { path: 'jogs', component: Jogs }
  ]
}
