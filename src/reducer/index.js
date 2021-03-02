import {
  FETCH_DATA,
  HIDE_ERROR,
  HIDE_LOADING,
  SET_CURRENT_PAGE,
  SET_MODE_SELECTED,
  SET_ROW_INFO,
  SET_SEARCH_WORD,
  SET_SORT_FIELDS,
  SHOW_ERROR,
  SHOW_LOADING,
} from "./types";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: action.payload };
    case HIDE_ERROR:
      return { ...state, error: null };
    case FETCH_DATA:
      return { ...state, items: action.payload };
    case SET_SORT_FIELDS:
      return { ...state, sort: action.payload };
    case SET_ROW_INFO:
      return { ...state, rowInfo: action.payload };
    case SET_MODE_SELECTED:
      return { ...state, modeSelected: true };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_SEARCH_WORD:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
