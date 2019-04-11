import { createThunk } from '../../utils/createThunk';
import * as backendAPI from '../../api/backendAPI/todos';

export const getTodos = createThunk({
  apiCall: backendAPI.fetchTodos,
  type: 'GET_ALL_TODOS'
});

export const toggleItem = () => ({
  // Implement me
});
