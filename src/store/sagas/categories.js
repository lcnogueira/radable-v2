import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';

export function* loadCategories() {
  try {
    const { data } = yield call(api.get, '/categories');

    yield put(CategoriesActions.loadCategoriesSuccess(data.categories));
    // toast.success(message);
  } catch (err) {
    const message = 'Error on loading categories';
    yield put(CategoriesActions.loadCategoriesFailure(message));
    toast.error(message);
  }
}
