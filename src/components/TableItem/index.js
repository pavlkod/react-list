const TableItem = ({ item }) => {
  return (
    <tr data-item={JSON.stringify(item)}>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};
export { TableItem };
