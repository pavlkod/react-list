import { useReducer } from "react";
import ReactPaginate from "react-paginate";

import { orderBy } from "lodash";

import { Loader } from "./components/Loader";
import { Table } from "./components/Table";

import { LIST_ITEMS } from "./api";

import {
  fetchData,
  hideLoading,
  setCurrentPage,
  setModeSelected,
  setRowInfo,
  setSearchWord,
  setSortFields,
  showError,
  showLoading,
} from "./reducer/actionCreators";
import { rootReducer } from "./reducer/index";
import { initialState } from "./reducer/state";

import { RowInfo } from "./components/RowInfo";
import { ModeSelect } from "./components/ModeSelect";
import { TableSearch } from "./components/TableSearch";

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const getItems = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch(fetchData(orderBy(data, state.sort.field, state.sort.order)));
    } catch (e) {
      dispatch(showError(e));
    } finally {
      dispatch(hideLoading());
    }
  };

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
      } catch (e) {
        dispatch(showError(e));
      }
    }
  };

  const onSelectHandler = count => {
    dispatch(setModeSelected());
    dispatch(showLoading());

    const url = new URL(LIST_ITEMS);
    url.searchParams.set("rows", count);
    getItems(url);
  };

  const changePageHandler = ({ selected }) => {
    dispatch(setCurrentPage(selected));
  };

  const onSearchHandler = value => {
    dispatch(setSearchWord(value));
    dispatch(setCurrentPage(0));
  };

  const getFilteredItems = () => {
    const { items, search } = state;

    if (!search) {
      return items;
    }
    return items.filter(
      item =>
        item.firstName.toLowerCase().includes(state.search) ||
        item.lastName.toLowerCase().includes(state.search) ||
        item.email.toLowerCase().includes(state.search)
    );
  };

  if (state.error) {
    return state.error;
  }

  if (state.loading) {
    return (
      <div className="container py-4">
        <Loader align="center" />
      </div>
    );
  }

  if (!state.modeSelected) {
    return (
      <div className="container text-center py-4">
        <ModeSelect onSelect={onSelectHandler} />
      </div>
    );
  }

  const pagesElementCount = 15;
  const startIndex = pagesElementCount * state.currentPage;

  const filteredData = getFilteredItems();
  const chunkData = filteredData.slice(startIndex, startIndex + pagesElementCount);

  return (
    <div className="container py-4">
      <TableSearch onSearch={onSearchHandler} />

      <Table items={chunkData} onSort={onSortHandler} onGetItem={onGetItemHandler} />

      {filteredData.length > pagesElementCount ? (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"page-item"}
          breakLinkClassName="page-link"
          pageCount={Math.ceil(filteredData.length / pagesElementCount)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={changePageHandler}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={state.currentPage}
        />
      ) : null}

      {Object.keys(state.rowInfo).length > 0 && <RowInfo info={state.rowInfo} />}
    </div>
  );
}

export default App;
