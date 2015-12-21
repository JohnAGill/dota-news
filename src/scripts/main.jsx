// This puts a <style> tag in <head> of page with transpiled css.
import '../styles/main.scss'

// Import bootstrap (which requires jQuery)
import 'imports?jQuery=jquery!bootstrap-sass'

import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import store from './reducers/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('content'))
