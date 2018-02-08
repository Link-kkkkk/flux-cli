// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
// Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

let defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('dispatch ADD')
      let counting = {
        count: state.count + action.num,
        name: 'mainTree'
      }
      console.log(counting)
      return counting;
    default:
      console.log('dispatch default')
      console.log(action.type)
      return {
        count: 0,
        name: 'mainTree'
      };
  }
}

export default reducer