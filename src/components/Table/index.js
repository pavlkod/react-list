import PropTypes from "prop-types";
import { HeadLine } from "../HeadLine";

import { TableItem } from "../TableItem";

const Table = ({ items = [], onSort, onGetItem }) => {
  const fields = ["ID", "Name", "UserName", "Email", "Phone"];
  const onClickHandler = e => {
    onGetItem && onGetItem(e);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map(field => (
            <HeadLine key={field} field={field} onSort={onSort} />
          ))}
        </tr>
      </thead>
      <tbody onClick={onClickHandler}>
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
