import { useEffect, useReducer } from "react";

import { orderBy } from "lodash";

import { Loader } from "./components/Loader";
import { Table } from "./components/Table";

import { LIST_ITEMS } from "./api";

import { fetchData, hideLoading, setSortFields } from "./reducer/actionCreators";
import { rootReducer } from "./reducer/index";
import { initialState } from "./reducer/state";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const onSortHandler = key => {
    const data = [...state.items];
    const order = state.sort.order === "asc" ? "desc" : "asc";

    dispatch(fetchData(orderBy(data, key, order)));
    dispatch(setSortFields({ key, order }));
  };

  useEffect(() => {
    const getItems = async url => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch(fetchData(orderBy(data, state.sort.key, state.sort.order)));
      } catch (e) {
      } finally {
        dispatch(hideLoading());
      }
    };
    getItems(LIST_ITEMS);
  }, []);

  if (state.error) {
    return state.error;
  }

  if (state.loading) {
    return (
      <div className="container">
        <Loader align="center" />
      </div>
    );
  }

  return (
    <div className="container">
      <Table items={state.items} onSort={onSortHandler} sortKey={state.sort.key} sortOrder={state.sort.order} />
    </div>
  );
}

export default App;
