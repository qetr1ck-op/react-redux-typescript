import { combineReducers } from 'redux';
import visibilityFilter from './filters.reducer';
import todos from './todos.reducer';

export default combineReducers({ todos, visibilityFilter });
