import App from './components/app'
import Home from './components/home/home'
import SignUp from './components/signUp/signUp'
import Login from './components/login/login'
import Trips from './components/trips/trips'
import CreateTrip from './components/createTrip/createTrip'
import EditTrip from './components/editTrip/editTrip'
import UserAuthorization from './components/userAuthorization/userAuthorization'
import _ from 'lodash'
import React from 'react' // eslint-disable-line no-unused-vars

function authedComponent(Component) {
  return (props, state) => <UserAuthorization><Component {...props} /></UserAuthorization>
}

const childRoutes = [
    { path: 'signup', component: SignUp },
    { path: 'login', component: Login },
    { path: 'trips', component: Trips },
    { path: 'trips/new', component: CreateTrip },
    { path: 'trips/:usersId/:uid/update', component: EditTrip }
]

const authRoute = (route) => {
  if (route.path === 'signup' || route.path === 'login') {
    return (route)
  }
  return ({...route, component: authedComponent(route.component)})
}

const authedRoutes = _.map(childRoutes, authRoute)
export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: authedRoutes
}
