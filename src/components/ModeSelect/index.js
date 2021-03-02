export const ModeSelect = ({ onSelect }) => {
  return (
    <div>
      <button className="btn btn-success" onClick={() => onSelect(32)}>
        32 элемента
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={() => onSelect(1000)}>
        1000 элементов
      </button>
    </div>
  );
};
