import { combineReducers } from 'redux';
// import reducer from '../logic/todos';
import reducer from '../containers/ItemsPage/reducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer
  });
}
