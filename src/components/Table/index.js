import PropTypes from "prop-types";
import { HeadLine } from "../HeadLine";

import { TableItem } from "../TableItem";

const Table = ({ items = [], onSort }) => {
  const fields = ["ID", "Name", "UserName", "Email", "Phone"];
  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map(field => (
            <HeadLine key={field} field={field} onSort={onSort} />
          ))}
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
