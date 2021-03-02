import { useState } from "react";

export const TableSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const onChangeHandler = e => setSearch(e.target.value);
  const onSearchHandler = e => onSearch && onSearch(search);
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter username"
        aria-label="Enter username"
        aria-describedby="basic-addon2"
        value={search}
        onChange={onChangeHandler}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={onSearchHandler}>
          Поиск
        </button>
      </div>
    </div>
  );
};
