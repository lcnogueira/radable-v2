import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as PostsActions } from '../ducks/posts';

export function* loadPosts(action) {
  const path = action.payload.category ? `/${action.payload.category}/posts` : '/posts';
  try {
    const { data } = yield call(api.get, path);

    yield put(PostsActions.loadPostsSucess(data));
    // toast.success(message);
  } catch (err) {
    const message = 'Error on loading posts';
    yield put(PostsActions.loadPostsFailure(message));
    toast.error(message);
  }
}

function addPostAction(payload) {
  return api.post('/posts', payload);
}

export function* addPost(action) {
  let message = 'Post succesfully added';
  try {
    const { data } = yield call(addPostAction, action.payload.post);

    yield put(PostsActions.addPostSuccess(data));
    // Reset form
    action.payload.cbSuccess();
    toast.success(message);
  } catch (error) {
    message = 'Error when adding post';
    yield put(PostsActions.addPostFailure(message));
    toast.error(message);
  }
}
