import {
  FETCH_DATA,
  HIDE_LOADING,
  SHOW_LOADING,
  SET_SORT_FIELDS,
  SET_ROW_INFO,
  SHOW_ERROR,
  HIDE_ERROR,
  SET_MODE_SELECTED,
  SET_CURRENT_PAGE,
  SET_SEARCH_WORD,
} from "./types";

export const hideLoading = () => ({
  type: HIDE_LOADING,
});
export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const fetchData = data => ({
  type: FETCH_DATA,
  payload: data,
});
export const setRowInfo = data => ({
  type: SET_ROW_INFO,
  payload: data,
});
export const setSortFields = data => ({
  type: SET_SORT_FIELDS,
  payload: data,
});

export const showError = data => ({
  type: SHOW_ERROR,
  payload: data,
});
export const hideError = data => ({
  type: HIDE_ERROR,
});

export const setModeSelected = data => ({
  type: SET_MODE_SELECTED,
});
export const setCurrentPage = data => ({
  type: SET_CURRENT_PAGE,
  payload: data,
});
export const setSearchWord = data => ({
  type: SET_SEARCH_WORD,
  payload: data,
});
