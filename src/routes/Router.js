import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from '../App';
import counter from '../page/counter';
import state from '../page/statebase';
const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/counter" component={counter} />
      <Route path="/state" component={state} />
    </Switch>
  </Router>
)

export default Main