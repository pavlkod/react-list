import { FETCH_DATA, HIDE_LOADING, SHOW_LOADING, SET_SORT_FIELDS } from "./types";

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
// export const sortData = data => ({
//   type: SORT_DATA,
//   payload: data,
// });
export const setSortFields = data => ({
  type: SET_SORT_FIELDS,
  payload: data,
});
