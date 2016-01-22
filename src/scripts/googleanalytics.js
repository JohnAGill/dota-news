/* eslint-disable*/

import ga from 'react-ga'
import config from './config'

var options = { debug: true }
ga.initialize(config.googleAnalyticsID, options)
ga.pageview('/#/')
