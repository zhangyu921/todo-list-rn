


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: Math.random(),
    text
  }
};


export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
};
