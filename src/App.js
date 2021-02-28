import { useEffect, useReducer } from "react";

import { orderBy } from "lodash";

import { Loader } from "./components/Loader";
import { Table } from "./components/Table";

import { LIST_ITEMS } from "./api";

import { fetchData, hideLoading, setRowInfo, setSortFields } from "./reducer/actionCreators";
import { rootReducer } from "./reducer/index";
import { initialState } from "./reducer/state";
import { RowInfo } from "./components/RowInfo";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const onSortHandler = (field, order) => {
    const data = [...state.items];

    dispatch(fetchData(orderBy(data, field, order)));
    dispatch(setSortFields({ field, order }));
  };

  const onGetItemHandler = event => {
    const { target } = event;
    let tr = null;
    if ((tr = target.closest("tr") || target.tagName === "tr")) {
      try {
        const item = JSON.parse(tr.dataset.item);
        dispatch(setRowInfo(item));
      } catch (e) {}
    }
  };

  useEffect(() => {
    const getItems = async url => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch(fetchData(orderBy(data, state.sort.field, state.sort.order)));
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
      <Table items={state.items} onSort={onSortHandler} onGetItem={onGetItemHandler} />
      {Object.keys(state.rowInfo).length > 0 && <RowInfo info={state.rowInfo} />}
    </div>
  );
}

export default App;
