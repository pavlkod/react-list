import { FETCH_DATA, HIDE_LOADING, SHOW_LOADING, SET_SORT_FIELDS, SET_ROW_INFO } from "./types";

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
