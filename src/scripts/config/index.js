/* eslint-disable*/
import _ from 'lodash'
import defaults from './defaults'

const environment = process.env.NODE_ENV

const getEnvironment = () => {
  switch (environment) {
    case 'production':
      return(require('./production'))
    case 'development':
      return(require('./development'))
    default:
      return(require('./development'))
  }
}

export const config = _.merge(defaults, getEnvironment().default)
export default config
