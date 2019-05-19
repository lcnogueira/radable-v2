/**
 * Types
 */
export const Types = {
  LOAD_CATEGORIES_REQUEST: 'categories/LOAD_REQUEST',
  LOAD_CATEGORIES_SUCCESS: 'categories/LOAD_SUCCESS',
  LOAD_CATEGORIES_FAILURE: 'categories/LOAD_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...action.payload.data],
      };
    case Types.LOAD_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  loadCategoriesRequest: () => ({
    type: Types.LOAD_CATEGORIES_REQUEST,
  }),
  loadCategoriesSuccess: data => ({
    type: Types.LOAD_CATEGORIES_SUCCESS,
    payload: { data },
  }),
  loadCategoriesFailure: error => ({
    type: Types.LOAD_CATEGORIES_FAILURE,
    payload: { error },
  }),
};
