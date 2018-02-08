const ADD_TODO = 'ADD';

let addTodo = function(id = 'id', num = 0){
  let json = {
    type: ADD_TODO,
    id: id,
    num: num
  }
  return json
};

export default addTodo