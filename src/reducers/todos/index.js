const initialState = {
  items: [],
  terms: ''
}

// Helpful for Step 2 ;)
const toggleTodo = (todos, id) =>
  todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

export const todos = (state = initialState, { type, payload }) => {
  // Implement Step 2 here
  switch (type) {
    case 'GET_ALL_TODOS_SUCCESS':
      return { items: [...state.items, ...payload ], terms: state.terms };
    default:
      return state;
  }
};

export default todos;
