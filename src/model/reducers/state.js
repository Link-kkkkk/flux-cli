let defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('dispatch ADD')
      console.log(state)
      let counting = state.count + action.num
      return {
        count: counting,
        name: 'mainTree'
      };
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