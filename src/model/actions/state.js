// State 的变化，会导致 View 的变化。所以，State 的变化必须是 View 导致的。
// Action 是一个对象，其中的 type 属性是必须的，表示 Action 的名称。其他属性可以自由设置，不过建议遵从 FSA 规范

const ADD_TODO = 'ADD';

// let addTodo = function(id = 'id', num = 0){
//   let json = {
//     type: ADD_TODO,
//     id: id,
//     num: num
//   }
//   return json
// };

let addTodo = (id = 'id', num = 0) => {
  let json = {
    type: ADD_TODO,
    id: id,
    num: num
  }
  return json
}
export default addTodo