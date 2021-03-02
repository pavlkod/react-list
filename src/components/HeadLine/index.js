import { useState } from "react";

import cn from "classnames";

import "./style.css";

const HeadLine = ({ field, onSort }) => {
  const [order, setOrder] = useState("desc");
  const onSortHandler = () => {
    const direction = order === "desc" ? "asc" : "desc";
    setOrder(direction);
    onSort(field, direction);
  };

  return (
    <th onClick={onSortHandler}>
      {field}&nbsp;
      <span className={cn("dropdown-toggle", order)}></span>
    </th>
  );
};
export { HeadLine };
