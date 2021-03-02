export const RowInfo = ({ info: { firstName, lastName, phone, email } }) => {
  return (
    <div>
      <h2>Info</h2>
      <p>
        Выбранный пользователь:{" "}
        <b>
          {firstName} {lastName}
        </b>
      </p>
      <p>Телефон: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};
