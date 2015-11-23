// This puts a <style> tag in <head> of page with transpiled css.
require('../styles/main.scss')

// Import bootstrap (which requires jQuery)
require('imports?jQuery=jquery!bootstrap-sass')

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/app')

ReactDOM.render(<App />, document.getElementById('content'));
