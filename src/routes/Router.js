import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from '../App';
import counter from '../page/counter';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/counter" component={counter} />
    </Switch>
  </Router>
)

export default Main