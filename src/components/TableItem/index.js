export const TableItem = ({ item: { id, name, username, email, phone } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};
