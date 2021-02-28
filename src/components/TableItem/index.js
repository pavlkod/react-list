const TableItem = ({ item }) => {
  return (
    <tr data-item={JSON.stringify(item)}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};
export { TableItem };
