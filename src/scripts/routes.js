import App from './components/app'
import Home from './components/Home/home'
import SignUp from './components/signUp/signUp'
import Login from './components/login/login'
import Trips from './components/trips/trips'
import CreateTrip from './components/createTrip/createTrip'

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'signup', component: SignUp },
    { path: 'login', component: Login },
    { path: 'trips', component: Trips },
    { path: 'new', component: CreateTrip }
  ]
}
