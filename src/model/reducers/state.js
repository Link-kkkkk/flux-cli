let defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('dispatch ADD')
      console.log(state + action.num)
      return state + action.num;
      break;
    default:
      console.log('dispatch default')
      console.log(action.type)
      return state;
      break;
  }
}

export default reducer