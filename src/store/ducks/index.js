import { combineReducers } from 'redux';

import posts from './posts';
import modal from './modal';
import categories from './categories';

export default combineReducers({
  posts,
  modal,
  categories,
});
