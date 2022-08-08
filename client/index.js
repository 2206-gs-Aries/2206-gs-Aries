import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './App'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise=loadStripe('pk_test_51LTdrBEznKcG9iRQKsASTEcnODkBdMnxKufVh3fgXBtpx0SaQLhf8AzeoqcdMDi88zEaCnb56RjuTXWmhqWrOfOV00uzKuRoFF')
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
