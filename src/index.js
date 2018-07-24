import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Route, Router, Switch } from 'react-router-dom'

import routes from './routes'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {routes.map((props, key) => <Route {...props} key={key} />)}
    </Switch>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
