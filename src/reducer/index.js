import { FETCH_DATA, HIDE_LOADING, SET_SORT_FIELDS, SHOW_LOADING } from "./types";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    case FETCH_DATA:
      return { ...state, items: action.payload };
    case SET_SORT_FIELDS:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
