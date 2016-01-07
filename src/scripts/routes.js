import App from './components/app'
import Home from './components/home/home'
import SignUp from './components/signUp/signUp'
import Login from './components/login/login'
import Trips from './components/trips/trips'
import CreateTrip from './components/createTrip/createTrip'
import EditTrip from './components/editTrip/editTrip'

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'signup', component: SignUp },
    { path: 'login', component: Login },
    { path: 'trips', component: Trips },
    { path: 'trips/new', component: CreateTrip },
    { path: 'trips/:uid/update', component: EditTrip }
  ]
}
