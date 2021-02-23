import PropTypes from "prop-types";
import { ArrowSort } from "../ArrowSort";

import { TableItem } from "../TableItem";

const Table = ({ items = [], onSort, sortKey, sortOrder }) => {
  const onSortHandler = e => {
    const { target } = e;
    if (onSort && (target.tagName === "th" || target.closest("th"))) {
      onSort(target.dataset.key);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr onClick={onSortHandler}>
          <th data-key="id">
            ID
            <ArrowSort field="id" sort={sortKey} order={sortOrder} />
          </th>
          <th data-key="name">
            Name <ArrowSort field="name" sort={sortKey} order={sortOrder} />
          </th>
          <th data-key="username">
            UserName <ArrowSort field="username" sort={sortKey} order={sortOrder} />
          </th>
          <th data-key="email">
            Email <ArrowSort field="email" sort={sortKey} order={sortOrder} />
          </th>
          <th data-key="phone">
            Phone <ArrowSort field="phone" sort={sortKey} order={sortOrder} />
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired,
};

export { Table };
