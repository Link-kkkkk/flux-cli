import React, { Component } from 'react'

import { createStore } from 'redux';

// const store = createStore(reducer);

// 注入redux
import action from './../model/actions/state'
import reducer from './../model/reducers/state'
const store = createStore(reducer)

// store.subscribe(store)

class Statebase extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.disp = this.disp.bind(this);
  // }

  disp() {
    store.dispatch(action('testId',10));
  }

  render() {
    return (
      <div>
        <p>state</p>
        <p>value:</p>
        <button onClick={this.disp}>click to dispatch</button>
      </div>
    )
  }
}

export default Statebase