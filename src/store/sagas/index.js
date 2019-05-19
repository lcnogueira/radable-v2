import { all, takeLatest } from 'redux-saga/effects';

import { Types as PostTypes } from '../ducks/posts';
import { Types as CategoriesTypes } from '../ducks/categories';
import { loadPosts, addPost } from './posts';
import { loadCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(PostTypes.LOAD_POSTS_REQUEST, loadPosts),
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(PostTypes.ADD_POST_REQUEST, addPost),
  ]);
}
