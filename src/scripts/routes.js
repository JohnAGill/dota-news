import App from './components/app'
import Home from './components/Home/home'
import Login from './components/login/login'

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'signup', component: Login }
  ]
}
