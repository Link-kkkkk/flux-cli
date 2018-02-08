import React, { Component } from 'react'

import { createStore } from 'redux';

// const store = createStore(reducer);

// 注入redux
import action from './../model/actions/state'
import reducer from './../model/reducers/state'
const store = createStore(reducer)

// store.subscribe(store)

class Statebase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }

    this.disp = this.disp.bind(this);
    this.geting = this.geting.bind(this);
  }

  disp() {
    store.dispatch(action('testId',10));
    this.geting()
  }

  geting() {
    let stateCount = store.getState()

    this.setState((prevState, props) => ({
      count: stateCount.count
    }));
  }

  componentWillMount(){

  }

  render() {
    return (
      <div>
        <p>state</p>
        <p>value:{this.state.count}</p>
        <button onClick={this.disp}>click to dispatch</button>
        <button onClick={this.geting}>get</button>
      </div>
    )
  }
}

export default Statebase