export const ModeSelect = ({ onSelect }) => {
  return (
    <div>
      <button className="btn btn-success" onClick={() => onSelect(5)}>
        5 row
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={() => onSelect(10)}>
        10 row
      </button>
    </div>
  );
};
