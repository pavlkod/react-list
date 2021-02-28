export const RowInfo = ({ info: { name, username, phone, email } }) => {
  return (
    <div>
      <h2>Info</h2>
      <p>
        Выбранный пользователь:
        <b>
          {name} ({username})
        </b>
      </p>
      <p>Телефон: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};
